import { getAccessToken } from "@/lib/spotify";
import { NextResponse } from "next/server";
import { redis } from "@/lib/upstash-redis";
import axios from "axios";


const CACHE_KEY = "last-played-track"
const CACHE_TTL = 60 * 60

export async function GET() {
  try {

    const cached = await redis.get(CACHE_KEY)

    if(cached) {
      return NextResponse.json({
        track: cached
      })
    }

    const { access_token } = await getAccessToken();

    const res = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "User-Agent": "Mozilla/5.0"
        },
      }
    );

    const track = res.data.items?.[0]?.track;
    console.log(track.name);
    
    const audioResponseSavaan = await axios.get(`${process.env.JIO_SAVAAN_API}/api/search/songs?query=${track.name}&page=0&limit=10`);

    const finalTrack = {
      id: track.id as string,
      name: track.name as string,
      artists: (track.artists as { name: string }[]).map((a) => a.name).join(", "),
      image: track.album.images[0]?.url as string,
      audio: audioResponseSavaan.data.data.results[0].downloadUrl[4].url as string, 
    }

    await redis.set(CACHE_KEY, finalTrack, {
      ex: CACHE_TTL
    })

    return NextResponse.json({
      track: finalTrack
    });


  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to fetch",
      status: 500
    });
  }
}

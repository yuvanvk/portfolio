import { getAccessToken } from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const { access_token } = await getAccessToken();

  const res = await axios.get(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  const track = res.data.items?.[0]?.track;
  const audioResponseSavaan = await axios.get(
    `https://saavn.sumit.co/api/search/songs?query=${track.name}&page=0&limit=10`
  );


  return NextResponse.json({
    track: {
      id: track.id as string,
      name: track.name as string,
      artists: (track.artists as { name: string }[]).map(a => a.name).join(", "),
      image: track.album.images[0]?.url as string,
      audio: audioResponseSavaan.data.data.results[0].downloadUrl[4].url as string,

    },
  });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
        message: "Something went wrong"
    })
  }
}

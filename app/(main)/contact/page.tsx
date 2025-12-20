"use client";
import { ContactCard } from "@/components/porfolio/contact-card";
import { Container } from "@/components/ui/container";
import { Asterisk } from "lucide-react";
import { useRef } from "react";

export default function ContactPage() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const playSound = () => {
        if(!audioRef.current) {
            audioRef.current = new Audio("/audio/tap_05.wav")
        }

        audioRef.current.currentTime = 0;
        audioRef.current.play()
    }
    const contactInfo = [
        {
            id: 1,
            type: "Email",
            label: "abhivigneshofficial@gmail.com",
            href: "mailto:abhivigneshofficial@gmail.com",
            playSound,
        },
        {
            id: 2,
            type: "X",
            label: "@yuvan",
            href: "https://x.com/abhi_vignesh",
            playSound,
        },
        {
            id: 3,
            type: "Instagram",
            label: "@yuvanvk",
            href: "https://instagram.com/abhi_vignesh",
            playSound,
        },
        {
            id: 4,
            type: "Github",
            label: "@yuvanvk",
            href: "https://github.com/yuvanvk",
            playSound,
        }
    ]
    return <Container>
        <div className="pt-20 ">
            <div className="flex items-center relative gap-x-2 px-2"> 
                <Asterisk  className="hidden md:block absolute  md:-top-1 md:-left-4 text-purple-500"/>
                <p className="font-instrument-serif text-2xl md:text-3xl xl:text-5xl">You can reach me out through </p>
                <div className="h-px bg-neutral-700 flex-1" />
                <div className="text-2xl md:text-3xl xl:text-5xl font-instrument-serif">5</div>
            </div>
            
            <div className="py-20 flex flex-col items-center w-full gap-y-2">
                {contactInfo.map((contact) => (
                    <ContactCard username={contact.label} href={contact.href} key={contact.id} handleName={contact.type} playSound={contact.playSound}/>
                ))}
            </div>
        </div>
    </Container> 
}
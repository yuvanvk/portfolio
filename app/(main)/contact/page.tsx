"use client";
import { ContactCard } from "@/components/cards/contact-card";
import { Container } from "@/components/wrapper/container";
import { SoundContext } from "@/context/Sound/SoundContext";
import { Asterisk } from "lucide-react";


import { motion } from "motion/react";
import { useContext } from "react";

export default function ContactPage() {
  const { playSound } = useContext(SoundContext);
  const contactInfo = [
    {
      id: 1,
      type: "Email",
      label: "abhivigneshofficial@gmail.com",
      href: "mailto:abhivigneshofficial@gmail.com",
      playSound: () => playSound("/audio/tap_05.wav"),
    },
    {
      id: 2,
      type: "X",
      label: "@yuvanvk",
      href: "https://x.com/yuvanvk",
      playSound: () => playSound("/audio/tap_05.wav"),
    },
    {
      id: 3,
      type: "Instagram",
      label: "@yuvanv.k",
      href: "https://instagram.com/yuvanv.k",
      playSound: () => playSound("/audio/tap_05.wav"),
    },
    {
      id: 4,
      type: "Github",
      label: "@yuvanvk",
      href: "https://github.com/yuvanvk",
      playSound: () => playSound("/audio/tap_05.wav"),
    },
  ];
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
        className="pt-20"
      >
        <div className="flex items-center relative max-w-sm md:max-w-lg lg:max-w-full gap-x-2 px-2 mx-auto">
          <Asterisk className="hidden md:block absolute  md:-top-1 md:-left-4 text-purple-500" />
          <p className="font-instrument-serif  text-3xl lg:text-4xl xl:text-5xl">
            You can contact me through{" "}
          </p>
          <div className="h-px bg-neutral-700 flex-1" />
          <div className="text-3xl lg:text-4xl xl:text-5xl font-instrument-serif">
            {contactInfo.length}
          </div>
        </div>
        <div className="text-center text-neutral-500 pt-30 pb-10 max-w-lg mx-auto">
          Always excited to connect with fellow builders and creators. If you’re working on something innovative, quirky, or just want to chat, let’s get in touch!
        </div>
        <div className="py-20 flex flex-col items-center w-full gap-y-2">
          {contactInfo.map((contact) => (
            <ContactCard
              username={contact.label}
              href={contact.href}
              key={contact.id}
              handleName={contact.type}
              playSound={contact.playSound}
            />
          ))}
        </div>
      </motion.div>
    </Container>
  );
}

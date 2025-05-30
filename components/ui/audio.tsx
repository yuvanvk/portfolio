'use client'
export const PlayAudio = () => {
    const audio = new Audio('/sound.mp3')
    audio.play()
}
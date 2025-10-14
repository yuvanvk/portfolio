

export const Thumbnail = ({ imageUrl, link }: { imageUrl: string, link: string }) => {
    return <div className="group w-full relative">
        <img src={imageUrl} alt={imageUrl} className="rounded-xl"/>
        <span className="opacity-0 group-hover:opacity-100 absolute bottom-3 left-3 text-black transition-opacity duration-300 bg-white backdrop:blur-lg px-2 py-1 rounded-xl">
            {link}
        </span>
    </div>
}
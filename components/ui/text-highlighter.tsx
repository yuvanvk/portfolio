export const TextHighLighter = ({ text }: { text: string }) => {
    return (
        <span className="px-1 py-0.5 bg-purple-500 text-white">
            {text}
        </span>
    )
}
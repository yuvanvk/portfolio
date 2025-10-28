export const Badge = ({children}: { children: React.ReactNode }) => {
    return <div className="mx-2 my-1 px-2 py-1 border-1 border-dashed bg-[#EDEDED] dark:bg-[#2F2F2F] align-middle inline-flex items-center gap-x-2 text-sm rounded-lg font-semibold w-fit tracking-tighter border-neutral-500">
        {children}
    </div>
}
interface Props {
    children: React.ReactNode
}

export default function AuthLayou({ children }: Props) {
    return (
        <div className="h-full flex items-center justify-center">
            {children}
        </div>
    )
}

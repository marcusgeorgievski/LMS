import Image from "next/image"

interface Props {
    //children: React.ReactNode;
}

export default function Logo() {
    return <Image height={30} width={30} src="/logo.svg" alt="Logo" />
}

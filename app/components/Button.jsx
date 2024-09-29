'use client'
import { usePathname } from 'next/navigation';


const Button = ({ css, name, path }) => {
    const pathname = usePathname();
    return (
        <button
            className={`${pathname === path || pathname === '/' && name === "Videos" ? "bg-orange-300" : "bg-white"} ${css}`}
        >
            {name}
        </button>
    )
}

export default Button

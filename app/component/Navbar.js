import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex justify-center w-full h-[7vh] items-center">
            <ul className="flex flex-wrap justify-center items-center gap-4 text-lg font-mono">
                <li>
                    <Link className="no-underline" href="/" >Home</Link>
                </li>
                <li className="no-underline" >Shop</li>
                <li className="no-underline" >Contact</li>
                <li>
                    <Link className="no-underline" href="/About" >About</Link>
                </li>
            </ul>
        </div>
    )
}
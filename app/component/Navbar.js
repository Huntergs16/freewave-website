

export default function Navbar() {
    return (
        <div className="flex justify-center w-full h-[7vh] items-center">
            <ul className="flex flex-wrap justify-center items-end gap-4 text-lg font-mono">
                <li className="no-underline cursor-pointer">Home</li>
                <li className="no-underline cursor-pointer" >Shop</li>
                <li className="no-underline cursor-pointer" >Contact</li>
                <li className="no-underline cursor-pointer" >About</li>
            </ul>
        </div>
    )
}
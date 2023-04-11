import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full h-min">
            <div className="flex h-[10vh] justify-center">
                {/* <img src="/fwa1_nobg.png" alt="FWA logo" className="object-cover pointer-events-none"/> */}
                <div className="relative w-20">
                    <Image fill src={"/fwa1_nobg.png"} className=""/>
                </div>
            </div>
            <div className="w-full h-4/5 bg-top">
                <div className="relative">
                    <img src="/FW_header.png" alt="Photoshoot" useMap="#image-map" className="h-full pointer-events-none" />
                    <map name="image-map">
                        <area className="absolute top-[8%] left-[50%] w-[13%] h-[17%] hover:opacity-50 cursor-pointer bg-white opacity-0" href="https://www.example.com" alt="Matt's Link" />
                        <area className="absolute top-[13%] left-[36%] w-[13%] h-[17%] hover:opacity-50 cursor-pointer bg-white opacity-0" href="https://www.example.com" alt="Matt's Link" />
                        <area className="absolute top-[45%] left-[22%] w-[13%] h-[17%] hover:opacity-50 cursor-pointer bg-white opacity-0" href="https://www.example.com" alt="Matt's Link" />
                        <area className="absolute top-[46%] left-[62%] w-[13%] h-[17%] hover:opacity-50 cursor-pointer bg-white opacity-0" href="https://www.example.com" alt="Matt's Link" />
                    </map>
                </div>
            </div>
        </div>
    )
}
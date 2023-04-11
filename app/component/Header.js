import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full h-min">
            <div className="flex h-[10vh] justify-center">
                {/* <img src="/fwa1_nobg.png" alt="FWA logo" className="object-cover pointer-events-none"/> */}
                <div className="relative w-20">
                    <Image fill src={"/fwa1_nobg.png"} className="" alt="Freewave Logo"/>
                </div>
            </div>
            <div className="w-full h-min">
                <div className="relative w-screen h-full">
                    <Image 
                        src="/FW_header.png"
                        alt="Photoshoot"
                        width={1200} // adjust the width of the image to fit your screen
                        height={800} // adjust the height of the image to fit your screen
                        className="w-full h-full object-cover object-center pointer-events-none" 
                        useMap="#image-map" 
                        />
                    <map name="image-map">
                        <area className="absolute top-[8%] left-[50%] w-[13%] h-[17%]  sm:opacity-10 md:opacity-0 lg:opacity-0 hover:opacity-30 cursor-pointer bg-white opacity-0 rounded-lg" href="https://instagram.com/matthewperaltaa?igshid=YmMyMTA2M2Y=" alt="Matt's Link" style={{ touchAction: 'manipulation' }}/>
                        <area className="absolute top-[13%] left-[36%] w-[13%] h-[17%] sm:opacity-10 md:opacity-0 lg:opacity-0 hover:opacity-30 cursor-pointer bg-white opacity-0 rounded-lg" href="https://instagram.com/fwmjaymo?igshid=YmMyMTA2M2Y=" alt="Jaymos's Link" style={{ touchAction: 'manipulation' }}/>
                        <area className="absolute top-[45%] left-[22%] w-[13%] h-[17%] sm:opacity-10 md:opacity-0 lg:opacity-0 hover:opacity-30 cursor-pointer bg-white opacity-0 rounded-lg" href="https://instagram.com/__jaazminn26?igshid=YmMyMTA2M2Y=" alt="Jazmin's Link" style={{ touchAction: 'manipulation' }}/>
                        <area className="absolute top-[46%] left-[62%] w-[13%] h-[17%] sm:opacity-10 md:opacity-0 lg:opacity-0 hover:opacity-30 cursor-pointer bg-white opacity-0 rounded-lg" href="https://instagram.com/tattooprincessbritt?igshid=YmMyMTA2M2Y=" alt="Brittany's Link" style={{ touchAction: 'manipulation' }}/>
                    </map>
                </div>
            </div>
        </div>
    )
}
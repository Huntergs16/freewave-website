import Image from 'next/image'
import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-6 py-3">
      <div className="w-full h-min grid grid-cols-2 grid-rows-auto gap-2">
        <div className="rounded-lg border-2 overflow-hidden h-min">
          {/* <img src="/FW_header.png" className="object-cover h-full w-full" alt="header pic" /> */}
          <Image src="/FW_header.png" className="object-cover h-full w-full" alt="header pic" width={1000} height={1000} />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min" >
          {/* <img src="/FWPROMO.png" className="object-cover h-full w-full" alt="promo pic" /> */}
          <Image src="/FWPROMO.png" className="object-cover h-full w-full" alt="promo pic" width={1000} height={1000} />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min">
          {/* <img src="/brino7.png" className="object-cover h-full w-full" alt="header pic" /> */}
          <Image src="/brino7.png" className="object-cover h-full w-full" alt="brino pic" width={1000} height={1000} />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min" >
          {/* <img src="/nickback.png" className="object-cover h-full w-full" alt="promo pic" /> */}
          <Image src="/nickback.png" className="object-cover h-full w-full" alt="nick pic" width={1000} height={1000} />
        </div>
      </div>
    </div>
  )
}

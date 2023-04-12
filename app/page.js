import Image from 'next/image'
import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-3">
      <div className="w-full h-min md:lg:grid md:lg:grid-cols-2 md:lg:grid-rows-auto gap-2 sm:flex sm:overflow-x-scroll">
        <div className="rounded-lg border-2 overflow-hidden h-min">
          <Image src="/FW_header.png" className="object-cover h-full w-full" alt="header pic" width={1000} height={1000} />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min" >
          <Image src="/FWPROMO.png" className="object-cover h-full w-full" alt="promo pic" width={1000} height={1000} />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min">
          <Image src="/brino7.png" className="object-cover h-full w-full" alt="brino pic" width={1000} height={1000} />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min" >
          <Image src="/nickback.png" className="object-cover h-full w-full" alt="nick pic" width={1000} height={1000} />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min">
          <Image src="/jazmin_britt.png" className="object-cover h-full w-full" alt="jaz&britt pic" width={1000} height={1000} />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min" >         
         <Image src="/matt_jaymo.png" className="object-cover h-full w-full" alt="matt&mo pic" width={1000} height={1000} />
        </div>
      </div>
    </div>
  )
}

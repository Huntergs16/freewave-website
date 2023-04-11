import Image from 'next/image'
import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="w-full h-screen grid grid-cols-2 grid-rows-auto gap-4">
        <div className="rounded-lg border-2 overflow-hidden h-min">
          <img src="/FW_header.png" className="object-cover h-full w-full" alt="placeholder image" />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min" >
          <img src="/FWPROMO.jpg" className="object-cover h-full w-full" alt="placeholder image" />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min">
          <img src="/FW_header.png" className="object-cover h-full w-full" alt="placeholder image" />
        </div>
        <div className="rounded-lg border-2 overflow-hidden h-min" >
          <img src="/FWPROMO.jpg" className="object-cover h-full w-full" alt="placeholder image" />
        </div>
      </div>
    </div>
  )
}

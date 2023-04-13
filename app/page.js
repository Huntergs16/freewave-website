import Image from 'next/image'
import Header from './component/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-3 sm:p-6">
        <div className="w-full h-min sm:grid sm:grid-cols-2 sm:grid-rows-auto gap-2 sm:gap-6 flex-col flex overflow-x-auto">
          <div className="rounded-lg border-2 overflow-hidden h-min" >
            <Image src="/FWPROMO.png" className="object-cover" alt="promo pic" width={1000} height={1000} />
          </div>
          <div className="rounded-lg border-2 overflow-hidden h-min">
            <Image src="/brino7.png" className="object-cover" alt="brino pic" width={1000} height={1000} />
          </div>
          <div className="rounded-lg border-2 overflow-hidden h-min" >
            <Image src="/nickback.png" className="object-cover" alt="nick pic" width={1000} height={1000} />
          </div>
          <div className="rounded-lg border-2 overflow-hidden h-min">
            <Image src="/jazmin_britt.png" className="object-cover" alt="jaz&britt pic" width={1000} height={1000} />
          </div>
          <div className="rounded-lg border-2 overflow-hidden h-min" >         
          <Image src="/matt_jaymo.png" className="object-cover" alt="matt&mo pic" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </>
  )
}

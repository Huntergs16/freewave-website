import Image from 'next/image'
import Header from './component/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <HomeImageSlider />
    </div>
  )
}

export function HomeImageSlider() {
  return(
      <div className="flex flex-col items-center justify-center">
        <div className="w-full overflow-x-auto whitespace-nowrap gap-4">
          <div className="rounded-lg border-2 overflow-hidden inline-block">
            <Image src="/FWPROMO.png" width={600} height={600} alt="image 1" />
          </div>
          <div className="rounded-lg border-2 overflow-hidden inline-block">
            <Image src="/brino7.png" width={600} height={600} alt="image 2" />
          </div>
          <div className="rounded-lg border-2 overflow-hidden inline-block">
            <Image src="/nickback.png" width={600} height={600} alt="image 3" />
          </div>
          <div className="rounded-lg border-2 overflow-hidden inline-block">
            <Image src="/jazmin_britt.png" width={600} height={600} alt="image 4" />
          </div>
          <div className="rounded-lg border-2 overflow-hidden inline-block">
            <Image src="/matt_jaymo.png" width={600} height={600} quality={75} alt="image 5" />
          </div>
        </div>
      </div>
  )
}

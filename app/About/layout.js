import Navbar from '../component/Navbar'
import Footer from '../component/Footer'


export default function AboutLayout({ children }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <Navbar /> */}
      {children}
    </section>
  )
}

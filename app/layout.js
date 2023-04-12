import './globals.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Footer from './component/Footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

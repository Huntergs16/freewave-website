import './globals.css'
import Navbar from './component/Navbar'
import Header from './component/Header'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

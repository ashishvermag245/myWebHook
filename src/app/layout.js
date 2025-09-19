import "./globals.css";
import Navbar from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'My Next.js App',
  description: 'Next.js + Tailwind Setup',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="min-h-screen container mx-auto px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

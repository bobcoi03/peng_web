import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Peng',
  description: 'Daily photo challenges with friends',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lofi">
      <head>
        <title>Peng</title>
        <link rel="icon" type="image/x-icon" href="/iconP.png"/>
      </head>
      <body className={inter.className}>
        <div className="navbar bg-base-100">
          <div className='navbar-start'>
            <img src="/iconP.png" className='h-7'/>
          </div>
          <div className='navbar-center'>
            <a className='text-2xl font-semibold text-black'>Peng</a>
          </div>
          <div className='navbar-end'/>
        </div>
        {children}
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <img src='/iconP.png' className='h-7'/>
            <p>Peng<br/></p>
          </div> 
          <div>
            <span className="footer-title">Legal</span> 
            <a className="link link-hover" href='https://www.freeprivacypolicy.com/live/b24234eb-f6b7-4976-9f54-4edf00726cbb' target='_blank'>Privacy policy</a> 
          </div>
          <div>
            <span className="footer-title">More</span> 
            <a className="link link-hover">About us</a> 
            <a className="link link-hover">Contact</a> 
            <a className="link link-hover">Press kit</a>
          </div> 
        </footer>
      </body>
    </html>
  )
}

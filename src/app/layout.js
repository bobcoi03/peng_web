import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Peng',
  description: 'Daily photo challenges with friends',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lofi">
      <head>
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-SR2GKD7F07"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-SR2GKD7F07');
            `
          }
        </Script>
        <script defer data-domain="pengapp.pics" src="https://plausible.io/js/script.js"></script>
        <title>Peng</title>
        <link rel="icon" type="image/x-icon" href="/iconP.png"/>
      </head>
      <body className={inter.className}>
        <div className="navbar bg-base-100">
          <div className='navbar-start'>
            <Link href={"/"}>
              <img src="/iconP.png" className='h-7'/>
            </Link>
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
            <Link href={"/support"}>
              <p className="link link-hover" target='_blank'>Support</p>             
            </Link>
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

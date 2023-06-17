import Image from 'next/image'

export default function Home() {
  return (
    <main data-theme="cupcake">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center flex-col lg:flex-row-reverse">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-black text-center">Daily photo challenges with friends.</h1>
            <p className="py-6">Everyday, there's a new photo challenge that will run for 24 hours. Friends share photos according to the challenge that is designed to promote positivity, authenticity and good vibes😎</p>
            <span className='flex flex-row gap-3 items-center justify-center'>
              <a className="btn btn-secondary" href='https://apps.apple.com/us/app/peng6/id6446037266' target='_blank'>App store</a>
              <a className="btn btn-primary font-white" href='https://play.google.com/store/apps/details?id=com.whatchadoinn' target='_blank'>
                Google Play
              </a>
            </span>
          </div>
          <img src="/cropped-screenshot.png" className="max-w-full sm:max-w-sm h-1/2 max-h-96"/>
        </div>
      </div>
    </main>
  )
}

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav id="header" className="fixed w-full z-30 top-0 text-white bg-black">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
              Vertigo Labs
            </a>
          </div>

        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>

      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 p-10">
            Page on Construction
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Vertigo Labs
              </h3>
              <p className="text-gray-600 mb-8">{`
                It's the perfect solution for real estate investments from home. Our platform allows you to explore
                investment opportunities and conduct transactions conveniently. Gain real estate benefits without leaving
                your home with Vertigo Labs.`}<br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <Image className="
              rounded   
              " src="/were.jpg" alt="" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

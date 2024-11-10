import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <main>
    <section>
      <div className='relative flex flex-col md:flex-row items-center justify-between p-10 md:p-20 lg:p-32 xl:p-56 rounded-md'>
          {/*Text Area*/}
          <div className='grid'>
            <Image src="/images/calculator.jpeg"
            alt='Resume'
            width={600}
            height={600} />
          </div>
          <div>
             <h1 className='text-5xl font-protest-strike font-normal w-full md:text-6x mb-4'>CLI Based Simple Calcultor.</h1>
             <p>This page showcases my static resume, meticulously crafted using HTML and CSS.<br /> Explore my detailed qualifications, experience, and skills presented in a clean and visually appealing format.<br /> Dive in to see my journey and accomplishments in the tech industry.</p>
          </div>
      </div>
    </section>
  </main>
)
}

export default page

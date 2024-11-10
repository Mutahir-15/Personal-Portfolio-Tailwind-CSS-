import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <main>
    <section>
      <div className='relative flex flex-col md:flex-row items-center gap-10 justify-between p-10 md:p-20 lg:p-32 xl:p-56 rounded-md'>
          {/*Text Area*/}
          <div className='grid'>
            <Image src="/images/bmi.png"
            alt='Resume'
            width={600}
            height={600} />
          </div>
          <div>
             <h1 className='text-5xl font-protest-strike font-normal w-full md:text-6x mb-4'>CLI Based BMI Calculator.</h1>
             <p>Welcome to my BMI Calculator! This tool is built using TypeScript to help you <br />effortlessly calculate your Body Mass Index (BMI). Simply input your height and weight, and instantly receive your BMI value along with a health category<br /> based on standard BMI ranges. The clean and intuitive interface ensures a user-friendly experience,<br /> making it easy to monitor and maintain your health.</p>
          </div>
      </div>
    </section>
  </main>
)
}

export default page

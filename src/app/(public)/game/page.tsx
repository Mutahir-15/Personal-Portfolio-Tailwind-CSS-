import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <main>
    <section>
      <div className='relative flex flex-col md:flex-row items-center gap-10 justify-between p-10 md:p-20 lg:p-32 xl:p-56 rounded-md'>
          {/*Text Area*/}
          <div className='grid'>
            <Image src="/images/game.png"
            alt='Resume'
            width={600}
            height={600} />
          </div>
          <div>
             <h1 className='text-5xl font-protest-strike font-normal w-full md:text-6x mb-4'>CLI Based Number Guessing Game.</h1>
             <p>Welcome to my Number Guessing Game! Built with TypeScript, this fun and interactive game challenges you <br />to guess a randomly generated number within a specified range. Enjoy an engaging user experience with intuitive<br /> prompts and immediate feedback on each guess. Perfect for testing your luck and improving your number prediction skills in a simple, yet entertaining way.</p>
          </div>
      </div>
    </section>
  </main>
)
}

export default page

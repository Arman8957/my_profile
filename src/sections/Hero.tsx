import Image from 'next/image'
import React from 'react'
import heroImage from '@/assets/icon/heroAvater.png';
import arrowDown from '@/assets/icon/downWhite.png';
import grainImage from '@/assets/images/grainImageBlack.jpg';
// import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className='m-0 py-32 md:py-48 lg:py-60 relative my-0 overflow-x-auto'>
      <div
        className='absolute inset-0 -z-30 opacity-50 [mask-image:linear-gradient(tp_bottom, transparent, black_70%, transparent)'
      // style={{
      //   background: `url(${grainImage.src})`,
      // }}
      >
        {/* <Spline
          scene="https://prod.spline.design/Eser7ogYq4kI5TiG/scene.splinecode"
        /> */}
      </div>
      <div className='w-[620px] h-[620px] hero-ring'></div>
      <div className='w-[820px] h-[820px] hero-ring'></div>
      <div className='w-[1020px] h-[1020px] hero-ring'></div>
      <div className='w-[1220px] h-[1220px] hero-ring'></div>

      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <Image
            src={heroImage}
            className='w-[100px] h-[100px]'
            alt=''
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4'>
            <div className='bg-green-500 w-2.5 h-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
        </div>

        <div className='max-w-lg mx-auto text-center mt-8'>
          <h1 className='font-serif text-3xl md:text-5xl tracking-wide'>
            Building Exceptional User Experience
          </h1>
          <p className='mt-4 text-white/60 md:text-lg'>
            I specialize in transforming design into functional, high-performing web applications. Let's discuss your next project.
          </p>
        </div>

        <div className='flex flex-col items-center md:flex-row justify-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore my works</span>
            <Image src={arrowDown} alt='arrow' className='w-4 h-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold'>Let's connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}

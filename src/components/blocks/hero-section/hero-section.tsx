'use client'
import { ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import type { BlogPost } from '@/components/blocks/blog-component/blog-component'
import LightRays from '@/components/lightray'
import { useEffect, useState } from 'react'

const HeroSection = ({ blogData }: { blogData: BlogPost[] }) => {
  const featuredPosts = blogData.filter(post => post.featured)
  const router = useRouter()

  const handleCardClick = (post: BlogPost) => {
    router.push(`/blog-detail/${post.slug}`)
  }

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Update state saat layar berubah
    const handleResize = () => setWindowWidth(window.innerWidth)

    // Set awal
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id='home' className='bg-muted h-screen'>
      <div className='absolute h-full w-full'>
        <LightRays
          raysOrigin='top-center'
          raysColor='#af3dff'
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className='custom-rays'
          pulsating={true}
          fadeDistance={1}
          saturation={1}
          key={windowWidth < 768 ? 'mobile' : 'desktop'}
        />
      </div>

      <div className='-pt-16 relative container mx-auto h-full px-4 lg:gap-8'>
        {/*  */}
        <div className='flex h-full flex-col items-center justify-center lg:mx-auto lg:h-full lg:w-1/2 lg:flex-row-reverse lg:items-center lg:justify-center lg:text-left'>
          <img
            src='/images/aMer.png'
            alt='Profile Picture'
            className='mx-auto mb-6 h-[12rem] w-[12rem] rounded-full object-cover lg:mb-8'
            style={{ minWidth: '160px', minHeight: '160px' }}
          />
          <div className='flex flex-col items-start lg:gap-4'>
            <p className='text-lg sm:text-2xl lg:text-3xl'>Hi, I'm, </p>
            <p className='text-2xl font-extrabold sm:text-4xl lg:text-5xl'>Muhammad Amer</p>
            <p className='sm:text-2xl lg:text-3xl'>a Software Engineer</p>
            <Button
              className='hover:px-2 sm:hover:px-6 lg:hover:px-12'
              variant='outline'
              size='lg'
              onClick={() => router.push('')}
            >
              Now me Better
              <ArrowUpRightIcon className='h-4 w-4' />
            </Button>
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  )
}

export default HeroSection

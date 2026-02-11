'use client'
import { ArrowUpRightIcon, Database, Github, Moon, Star } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import type { BlogPost } from '@/components/blocks/blog-component/blog-component'
import LightRays from '@/components/lightray'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const HeroSection = ({ blogData, className }: { blogData: BlogPost[]; className: string }) => {
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
          // raysColor='#af3dff'
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={6}
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

      <div className='-pt-16 relative container mx-auto h-full px-8 lg:gap-8'>
        {/*  */}
        <div className='flex h-full flex-col items-center justify-center lg:mx-auto lg:h-full lg:w-3/4 lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-16 lg:text-left xl:w-1/2'>
          <Star className='absolute top-1/2 left-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-pulse [animation-duration:2.5s] lg:left-20 lg:block' />
          <Star className='absolute top-1/4 left-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-pulse [animation-duration:2.5s] lg:left-70 lg:block' />
          {/* <Moon className='absolute top-1/2 right-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 [animation-duration:2.5s] hover:animate-spin' /> */}
          <Star className='absolute top-1/4 right-8 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-pulse [animation-duration:2.5s] lg:right-20 lg:block' />

          <img
            src='/images/mr.png'
            alt='Profile Picture'
            className={cn('glow h-[200px] w-[200px] rounded-full object-cover', className)}
          />
          <div className='flex flex-col items-start justify-center lg:gap-4'>
            <p className='text-lg sm:text-2xl lg:text-3xl'>Hi, I'm, </p>
            <p className='text-2xl font-extrabold sm:text-4xl lg:text-5xl'>Muhammad Amer</p>
            <p className='sm:text-2xl lg:text-3xl'>a Software Engineer</p>
            <Button
              className='mt-2 hover:px-5 sm:hover:px-6 lg:hover:px-12'
              variant='outline'
              size='lg'
              onClick={() => router.push('')}
            >
              Now me Better
              <ArrowUpRightIcon className='mx-2 h-4' />
            </Button>
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  )
}

export default HeroSection

'use client'
import { ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import type { BlogPost } from '@/components/blocks/blog-component/blog-component'

const HeroSection = ({ blogData }: { blogData: BlogPost[] }) => {
  const featuredPosts = blogData.filter(post => post.featured)
  const router = useRouter()

  const handleCardClick = (post: BlogPost) => {
    router.push(`/blog-detail/${post.slug}`)
  }

  return (
    <section id='home' className='bg-muted -mt-16 h-screen pt-32 pb-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col justify-center gap-16 px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='flex max-w-4xl flex-col items-center gap-4 self-center text-center'>
          <div className='flex items-center gap-10 md:gap-16'>
            <img src='images/aMer.png' alt='aMer' width={300} className='rounded-full ring-2 hover:ring-white' />
            {/* <div>
              <p className='text-3xl md:text-4xl'>Hi, I&apos;m</p>
              <strong className='text-4xl md:text-6xl'>Muhammad aMer</strong>
            </div> */}
            <div>
              <h1 className='text-start text-3xl font-semibold sm:text-4xl lg:text-5xl'>Muhammad Amer</h1>
              <p className='text-muted-foreground text-start text-2xl'>Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

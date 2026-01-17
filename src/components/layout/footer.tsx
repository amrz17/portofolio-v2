import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import Link from 'next/link'

import { Separator } from '@/components/ui/separator'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 border-t-1 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8 lg:px-8'>
        <div className='flex flex-wrap items-center justify-center gap-x-3 gap-y-2 whitespace-nowrap sm:gap-5'>
          <p className=''>
            <span>Created by Muhammad Amer️ </span>
            <span>{`©${new Date().getFullYear()}`} </span>
          </p>
        </div>

        <div className='flex w-full items-center justify-end gap-4'>
          <Link href='#' target='blank'>
            <FacebookIcon className='size-5' />
          </Link>
          <Link href='#' target='blank'>
            <InstagramIcon className='size-5' />
          </Link>
          <Link href='#' target='blank'>
            <TwitterIcon className='size-5' />
          </Link>
          <Link href='#' target='blank'>
            <YoutubeIcon className='size-5' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

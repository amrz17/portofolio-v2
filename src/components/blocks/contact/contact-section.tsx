'use client'

// Component Imports
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const ContactMe = () => {
  return (
    <section className='bg-muted h-full items-center justify-center py-8 sm:py-16 lg:py-24' id='get-in-touch'>
      <div className='container mx-auto max-w-5xl items-center justify-center px-4 sm:px-6 lg:px-8'>
        <Card className='shadow-none'>
          <CardContent>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              {/* Left Column - Image */}
              {/* <div className='relative h-64 sm:h-80 lg:h-auto'>
                <img
                  src='/images/'
                  alt='Workspace with laptop'
                  className='h-full w-full rounded-lg object-cover'
                />
              </div> */}

              {/* Right Column - Content */}
              <Card className='bg-muted rounded-lg border-0 shadow-none'>
                <CardContent className='flex h-full flex-col justify-between gap-4'>
                  <h2 className='text-xl leading-tight font-semibold lg:text-2xl'>
                    Membangun solusi digital yang memadukan estetika desain dengan performa kode yang optimal.
                  </h2>
                  <div>
                    <p className='text-muted-foreground mb-3 text-base'>
                      Saya Amer, seorang pengembang yang berfokus pada ekosistem JavaScript. Saya telah membantu
                      berbagai proyek bertransformasi menjadi produk yang user-friendly, efisien, dan siap bersaing di
                      era digital.
                    </p>
                    {/* Email Form */}
                    <form className='gap-3 py-1 max-sm:space-y-2 sm:flex sm:flex-row'>
                      <Input type='email' placeholder='Your email' className='bg-background h-10 flex-1 text-base' />
                      <Button size='lg' variant='outline' className='text-base max-sm:w-full' type='submit'>
                        Send
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ContactMe

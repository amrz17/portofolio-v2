import { blogPosts } from '@/assets/data/blog-posts'

import HeroSection from '@/components/blocks/hero-section/hero-section'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'aMer - Portofolio Website',
      description: 'Portofolio Website Muhammad Amer',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en-US'
    }
  ]
}

const Home = () => {
  return (
    <div>
      <HeroSection blogData={blogPosts} />
      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </div>
  )
}

export default Home

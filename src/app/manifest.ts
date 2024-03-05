import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tell Me Dolar Price',
    short_name: 'Dolar Price',
    description: 'Page where you can calculate the dolar price from differents rates',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#fff',
    icons: [
      {
        src: '/vercel.svg',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
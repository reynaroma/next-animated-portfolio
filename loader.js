export default function myImageLoader({ src, width, quality }) {
  return `https://next-animated-portfolio-reynaroma.vercel.app/${src}?w=${width}&q=${quality || 75}`
}

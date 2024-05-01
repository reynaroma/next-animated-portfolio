export default function myImageLoader({ src, width, quality }) {
  return `https://reynamayromaportfolio.com/${src}?w=${width}&q=${quality || 75}`
}
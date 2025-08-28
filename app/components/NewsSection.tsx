'use client'

import { useEffect, useState } from 'react'
import { sanityClient } from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/GreatVibes-Wmr4.ttf',
})

type NewsItem = {
  _id: string
  title: string
  summary: string
  link: string
  publishedAt: string
  image?: { asset: { _ref: string } } // optional image field
}

// Build image URLs
const builder = imageUrlBuilder(sanityClient)
function urlFor(source: any) {
  return builder.image(source)
}

function getRelativeTime(dateString: string) {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const date = new Date(dateString);
  const diff = (Date.now() - date.getTime()) / 1000;

  const times = [
    { unit: "year", seconds: 60 * 60 * 24 * 365 },
    { unit: "month", seconds: 60 * 60 * 24 * 30 },
    { unit: "week", seconds: 60 * 60 * 24 * 7 },
    { unit: "day", seconds: 60 * 60 * 24 },
    { unit: "hour", seconds: 60 * 60 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  for (const { unit, seconds } of times) {
    const delta = Math.floor(diff / seconds);
    if (Math.abs(delta) >= 1) {
      return rtf.format(-delta, unit as Intl.RelativeTimeFormatUnit);
    }
  }
  return "just now";
}

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "newsItem"] | order(publishedAt desc)[0...3]{
          _id, title, summary, link, publishedAt, image
        }`
      )
      .then(setNews)
  }, [])

  return (
    <section className="bg-white text-gray-900 py-16 px-6" id="news">
      <div className="max-w-6xl mx-auto">
        <div className={myFont.className}>
          <h2 className="text-6xl text-gray-800 font-bold text-center mb-12">Actualités</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item._id}
              className="rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Render image if it exists */}
              {item.image && (
                <img
                  src={urlFor(item.image).width(600).height(400).url()}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}

              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{getRelativeTime(item.publishedAt)}</p>
              <p className="text-sm text-gray-700">{item.summary}</p>

              {/* Optional link */}
              {/* <a
                href={item.link}
                className="inline-block mt-4 text-blue-500 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lire plus →
              </a> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

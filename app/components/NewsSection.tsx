'use client'

import { useEffect, useState } from 'react'
import { sanityClient } from '../lib/sanity'

type NewsItem = {
  _id: string
  title: string
  summary: string
  link: string
  publishedAt: string
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
          _id, title, summary, link, publishedAt
        }`
      )
      .then(setNews)
  }, [])

  return (
    <section className="bg-white text-gray-900 py-16 px-6" id="news">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Actualités
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item._id}
              className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">
                      {getRelativeTime(item.publishedAt)}
                  </p>
              <p className="text-sm text-gray-700">{item.summary}</p>
              
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

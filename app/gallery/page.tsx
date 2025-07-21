// app/gallery/page.tsx or wherever your page is
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


type GalleryImage = {
  _id: string;
  alt: string;
  image: any; // You can further type this with Sanity's image schema
};

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const data = await sanityClient.fetch<GalleryImage[]>(
        `*[_type == "galleryImage"] | order(_createdAt desc) {
          _id,
          alt,
          image
        }`
      );
      setImages(data);
    };
    fetchImages();
  }, []);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <h1 className="text-4xl font-bold text-center mb-12">Galerie Photos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <button
              key={img._id}
              onClick={() => openModal(i)}
              className="relative block w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              aria-label={`Open image: ${img.alt}`}
            >
              <Image
                src={urlFor(img.image).width(400).height(300).url()}
                alt={img.alt}
                width={400}
                height={300}
                className="object-cover w-full h-60"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Modal Lightbox */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={images[modalIndex].alt}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold focus:outline-none"
            aria-label="Close modal"
          >
            &times;
          </button>
          <Image
            src={urlFor(images[modalIndex].image).width(800).height(600).url()}
            alt={images[modalIndex].alt}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

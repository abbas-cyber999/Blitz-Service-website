"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
};

type WorkGalleryProps = {
  title: string;
  description: string;
  items: readonly GalleryItem[];
};

export function WorkGallery({ title, description, items }: WorkGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  const activeItem = items[activeIndex];

  return (
    <section className="surface-card rounded-[34px] p-6 md:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
          Galerie
        </p>
        <h2 className="mt-3 text-3xl text-[color:var(--foreground)] md:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-8 text-[color:var(--foreground-muted)]">
          {description}
        </p>
      </div>

      <div className="gallery-slider mt-8">
        <div className="gallery-stage">
          <div className="gallery-media">
            <Image
              key={activeItem.src}
              src={activeItem.src}
              alt={activeItem.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
          </div>

          <button
            type="button"
            onClick={previousSlide}
            className="gallery-nav gallery-nav-left"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="gallery-nav gallery-nav-right"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="gallery-counter">
            {activeIndex + 1} / {items.length}
          </div>
        </div>

        <div className="gallery-thumbs">
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`gallery-thumb ${index === activeIndex ? "gallery-thumb-active" : ""}`}
              aria-label={`Bild ${index + 1} anzeigen`}
            >
              <span className="gallery-thumb-media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 25vw, 12vw"
                  className="object-cover"
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

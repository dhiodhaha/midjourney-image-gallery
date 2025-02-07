"use client";

import { AnimatedGroup } from "@/components/ui/animated-group";

import { ImageCard, ImageItem } from "./image-card";

type MasonryLayoutProps = {
  images: ImageItem[];
};

export const MasonryLayout = ({ images }: MasonryLayoutProps) => {
  return (
    <AnimatedGroup
      className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-1 space-y-1"
      preset="fade"
    >
      {images.map((image, id) => (
        <ImageCard key={id} {...image} />
      ))}
    </AnimatedGroup>
  );
};

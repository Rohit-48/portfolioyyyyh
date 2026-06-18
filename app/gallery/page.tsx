"use client";

import DragElements from "@/components/fancy/blocks/drag-elements";
import { galleryImages } from "@/lib/site";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="font-fraunces text-3xl font-semibold">Gallery</h1>
      <p className="mt-2 text-sm text-muted-foreground">Drag things around.</p>
      <p className="mt-2 text-sm text-muted-foreground">Just sharing pics.</p>
      <div className="relative mt-8 h-[900px] w-full overflow-hidden rounded-xl border border-border/60 bg-muted/30">
        <DragElements dragMomentum={false} className="p-4">
          {galleryImages.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={192}
              height={192}
              draggable={false}
              className="size-48 rounded-3xl border border-border/40 object-cover shadow-sm"
            />
          ))}
        </DragElements>
      </div>
    </div>
  );
}

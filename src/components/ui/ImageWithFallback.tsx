'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, alt, className }: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);
  
  // Fallback to a profile image if the provided image fails to load
  const fallbackSrc = "/assets/images/profile2.jpg";

  return (
    <Image
      src={imageError ? fallbackSrc : src}
      alt={alt}
      fill
      className={className}
      onError={() => setImageError(true)}
    />
  );
} 
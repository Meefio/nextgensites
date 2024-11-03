"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LinkPreviewProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

const PREVIEW_IMAGES: Record<string, string> = {
  'nextjs.org': '/images/previews/nextjs-preview.png',
  'supabase.com': '/images/previews/supabase-preview.png',
  'posthog.com': '/images/previews/posthog-preview.png',
  'sentry.io': '/images/previews/sentry-preview.png',
  'strapi.io': '/images/previews/strapi-preview.png',
} as const;

export function LinkPreview({ url, children, className }: LinkPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const linkRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    try {
      const domain = new URL(url).hostname;
      const image = PREVIEW_IMAGES[domain];
      if (image) {
        setPreviewImage(image);
      }
    } catch (error) {
      console.error('Error parsing URL:', error);
    }
  }, [url]);

  const handleMouseEnter = () => {
    console.log('Mouse enter');
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse leave');
    setIsHovered(false);
  };

  return (
    <span
      ref={linkRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "text-primary hover:underline cursor-pointer",
          className
        )}
      >
        {children}
      </a>
      
      {isHovered && previewImage && (
        <span 
          className="absolute z-50"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: '100%',
            marginTop: '0.5rem',
          }}
        >
          <span className="block w-[300px] animate-in fade-in zoom-in duration-200">
            <span className="block rounded-lg border bg-background shadow-lg p-4">
              <span className="block relative aspect-[1200/630] w-full overflow-hidden rounded-md bg-muted">
                <Image
                  src={previewImage}
                  alt={`Preview of ${url}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="300px"
                />
              </span>
              <span className="block mt-2 text-sm text-muted-foreground truncate">
                {url.replace(/^https?:\/\//, '')}
              </span>
            </span>
          </span>
        </span>
      )}
    </span>
  );
} 
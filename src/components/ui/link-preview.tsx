"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LinkPreviewProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

const PREVIEW_IMAGES = {
  'nextjs.org': '/images/previews/nextjs-preview.png',
  'supabase.com': '/images/previews/supabase-preview.png',
  'posthog.com': '/images/previews/posthog-preview.png',
  'sentry.io': '/images/previews/sentry-preview.png',
} as const;

export function LinkPreview({ url, children, className }: LinkPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [previewImage, setPreviewImage] = useState<string>('');

  useEffect(() => {
    const domain = new URL(url).hostname;
    const image = PREVIEW_IMAGES[domain as keyof typeof PREVIEW_IMAGES];
    console.log('Domain:', domain);
    console.log('Preview image:', image);
    if (image) {
      setPreviewImage(image);
    }
  }, [url]);

  useEffect(() => {
    const updatePosition = () => {
      if (linkRef.current) {
        const rect = linkRef.current.getBoundingClientRect();
        setPosition({
          x: rect.left,
          y: rect.bottom + window.scrollY + 5,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <a
        ref={linkRef}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "text-primary hover:underline cursor-pointer",
          className
        )}
        onMouseEnter={() => {
          console.log('Mouse enter');
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          console.log('Mouse leave');
          setIsHovered(false);
        }}
      >
        {children}
      </a>
      {isHovered && previewImage && (
        <div
          className="fixed z-50 w-[300px] md:w-[400px] animate-in fade-in slide-in-from-top-1 duration-200"
          style={{ left: position.x, top: position.y }}
        >
          <div className="rounded-lg border bg-card p-4 shadow-lg">
            <div className="aspect-[1200/630] relative mb-3 overflow-hidden rounded-md">
              <Image
                src={previewImage}
                alt={`Preview of ${url}`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground truncate">
              {url.replace(/^https?:\/\//, '')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 
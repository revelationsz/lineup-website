'use client'

export default function AnimatedBlurImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      data-animate-blur
      onLoad={(e) => e.currentTarget.classList.add('loaded')}
    />
  )
}

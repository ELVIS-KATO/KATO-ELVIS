import { useState, type ReactNode } from 'react'

interface ImagePlaceholderProps {
  children: ReactNode
  dataImage?: string
  className?: string
  minHeight?: string
}

export function ImagePlaceholder({
  children,
  dataImage,
  className = '',
  minHeight = 'min-h-[200px]',
}: ImagePlaceholderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const getImageUrl = (path: string) => {
    if (path.startsWith('http')) return path
    const base = import.meta.env.BASE_URL || '/'
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return `${base}${cleanPath}`
  }

  return (
    <div
      className={`image-placeholder relative overflow-hidden ${minHeight} ${className}`}
      role="img"
      aria-label={typeof children === 'string' ? children : 'Project Image'}
    >
      {dataImage && !hasError ? (
        <img
          src={getImageUrl(dataImage)}
          alt={typeof children === 'string' ? children : 'Project Image'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      ) : null}

      {(!isLoaded || hasError || !dataImage) && (
        <div className="relative z-10 max-w-[80%] px-4 leading-relaxed bg-black/40 backdrop-blur-sm rounded-md py-2">
          {children}
        </div>
      )}
    </div>
  )
}

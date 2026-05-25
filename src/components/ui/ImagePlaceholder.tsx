import type { ReactNode } from 'react'

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
      {dataImage ? (
        <img
          src={getImageUrl(dataImage)}
          alt={typeof children === 'string' ? children : 'Project Image'}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : null}
      <div className="relative z-10 max-w-[80%] px-4 leading-relaxed bg-black/40 backdrop-blur-sm rounded-md py-2">
        {children}
      </div>
    </div>
  )
}

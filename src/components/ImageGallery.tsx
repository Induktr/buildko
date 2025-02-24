import { useCallback, useEffect, useState, MouseEventHandler, useRef } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { BrickAnimation } from './animations/BrickAnimation';
import 'react-image-gallery/styles/css/image-gallery.css';
import ErrorBoundary from './ErrorBoundary';

interface ImageGalleryProps {
  images: string[];
}

interface GalleryImageProps {
  item: any;
}

const GalleryImage: React.FC<{ item: any }> = ({ item }) => {
  const [, setImageDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = item.original;
    img.onload = () => {
      setImageDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    img.onerror = (e: any) => {
      console.error("Image failed to load:", item.original);
      e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Available";
    };
  }, [item.original]);

  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(prevScale => prevScale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(1, prevScale - 0.1));
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[16/9]"
    >
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleZoomIn}
          className="p-2 rounded-full bg-gray-800/70 hover:bg-amber-600/70 transition-colors"
          aria-label="Zoom In"
        >
          <ZoomIn className="w-5 h-5 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleZoomOut}
          className="p-2 rounded-full bg-gray-800/70 hover:bg-amber-600/70 transition-colors"
          aria-label="Zoom Out"
        >
          <ZoomOut className="w-5 h-5 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleResetZoom}
          className="p-2 rounded-full bg-gray-800/70 hover:bg-amber-600/70 transition-colors"
          aria-label="Reset"
        >
          <Maximize2 className="w-5 h-5 text-white" />
        </motion.button>
      </div>
        <img
          ref={imageRef}
          src={item.original}
          alt={item.originalAlt || ''}
          className="w-full h-full object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 800px"
          style={{
            maxHeight: '600px',
            background: 'rgba(0,0,0,0.1)',
            transform: `scale(${scale})`,
            transition: 'transform 0.3s ease-in-out'
          }}
          onError={(e: any) => {
            console.error("Image failed to load:", item.original);
            e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Available";
          }}
        />
    </motion.div>
  );
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const { t } = useTranslation();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleScreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleScreenChange);
  }, [handleScreenChange]);

  const handleFullscreenClick = useCallback(async () => {
    try {
      if (!isFullscreen) {
        const galleryElement = document.querySelector('.image-gallery');
        if (galleryElement && galleryElement.requestFullscreen) {
          await galleryElement.requestFullscreen();
        }
      } else if (document.exitFullscreen && document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (error: any) {
      console.warn('Fullscreen operation failed:', error.message);
      setIsFullscreen(!isFullscreen);
    }
  }, [isFullscreen]);

  const renderFullscreenButton = (onClick: MouseEventHandler<HTMLElement>) => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="image-gallery-icon p-2 rounded-full bg-gray-800/70 hover:bg-amber-600/70 transition-colors"
      aria-label={t('gallery.fullscreen')}
    >
      <Maximize2 className="w-5 h-5 text-white" />
    </motion.button>
  );

  const renderNavigationButtons = (direction: 'left' | 'right') => {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
    return (onClick: MouseEventHandler<HTMLElement>, disabled: boolean) => (
      <motion.button
        whileHover={{ scale: 1.1, x: direction === 'left' ? -5 : 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        disabled={disabled}
        className={`
          image-gallery-icon p-2 rounded-full
          bg-gray-800/70 hover:bg-amber-600/70 transition-colors
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        aria-label={t(`gallery.${direction}`)}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          [direction]: '16px'
        }}
      >
        <Icon className="w-5 h-5 text-white" />
      </motion.button>
    );
  };

  const galleryItems = images.map(image => ({
    original: image,
    thumbnail: image,
    thumbnailLoading: 'lazy' as const,
    loading: 'lazy' as const,
    srcSet: `${image} 800w, ${image.replace(/\.(jpg|jpeg|png|gif)$/i, '_medium.$1')} 400w`,
    sizes: "(max-width: 768px) 100vw, 800px",
  }));

  const galleryConfig = {
    items: galleryItems,
    renderLeftNav: renderNavigationButtons('left'),
    renderRightNav: renderNavigationButtons('right'),
    ...(document.fullscreenEnabled ? { renderFullscreenButton: (onClick: MouseEventHandler<HTMLElement>) => renderFullscreenButton(onClick) } : {}),
  };

  return (
    <BrickAnimation index={0}>
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
        <div className="aspect-[16/9] relative">
          <ErrorBoundary>
            <ReactImageGallery
              {...galleryConfig}
              lazyLoad={true}
              thumbnailPosition="bottom"
              showThumbnails={true}
              showBullets={false}
              additionalClass="custom-image-gallery aspect-ratio-container"
            />
          </ErrorBoundary>
        </div>
      </div>
    </BrickAnimation>
  );
}

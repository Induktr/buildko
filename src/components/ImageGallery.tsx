import { useCallback, useEffect, useState, MouseEventHandler, useRef } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { TransformWrapper, TransformComponent } from '@pronestor/react-zoom-pan-pinch';
import { BrickAnimation } from './animations/BrickAnimation';
import LoadingSpinner from './animations/LoadingSpinner';
import 'react-image-gallery/styles/css/image-gallery.css';

interface ImageGalleryProps {
  images: string[];
}

/**
 * ImageGallery Component: Displays a gallery of images with fullscreen support, navigation, and error handling.
 */
export default function ImageGallery({ images }: ImageGalleryProps) {
  const { t } = useTranslation();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const transformWrapperRef = useRef(null);

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

  const renderZoomControls = ({ zoomIn, zoomOut, resetTransform }: any) => (
    <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => zoomIn()}
        className="p-2 rounded-full bg-gray-800/70 hover:bg-amber-600/70 transition-colors"
        aria-label={t('gallery.zoomIn')}
      >
        <ZoomIn className="w-5 h-5 text-white" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => zoomOut()}
        className="p-2 rounded-full bg-gray-800/70 hover:bg-amber-600/70 transition-colors"
        aria-label={t('gallery.zoomOut')}
      >
        <ZoomOut className="w-5 h-5 text-white" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => resetTransform()}
        className="p-2 rounded-full bg-gray-800/70 hover:bg-amber-600/70 transition-colors"
        aria-label={t('gallery.reset')}
      >
        <Maximize2 className="w-5 h-5 text-white" />
      </motion.button>
    </div>
  );

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
    renderItem: (item: any) => (
      <TransformWrapper
        ref={transformWrapperRef}
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        centerOnInit
        wheel={{ step: 0.1 }}
      >
        {(utils) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            {renderZoomControls(utils)}
            <TransformComponent
              wrapperClass="!w-full !h-full"
              contentClass="!w-full !h-full"
            >
              <img
                src={item.original}
                alt={item.originalAlt || ''}
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e: any) => {
                  console.error("Image failed to load:", item.original);
                  e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Available";
                }}
                onLoad={() => setIsLoading(false)}
              />
            </TransformComponent>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10">
                <LoadingSpinner />
              </div>
            )}
          </motion.div>
        )}
      </TransformWrapper>
    ),
  }));

  const galleryConfig = {
    items: galleryItems,
    showPlayButton: false,
    showFullscreenButton: true,
    showNav: true,
    onScreenChange: handleScreenChange,
    onErrorImageURL: "https://via.placeholder.com/800x600?text=Image+Not+Available",
    useBrowserFullscreen: false,
    renderFullscreenButton: (onClick: MouseEventHandler<HTMLElement>) => 
      renderFullscreenButton((event) => {
        handleFullscreenClick();
        onClick(event);
      }),
    renderLeftNav: renderNavigationButtons('left'),
    renderRightNav: renderNavigationButtons('right'),
    additionalClass: 'custom-image-gallery',
  };

  return (
    <BrickAnimation index={0}>
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
        <ReactImageGallery {...galleryConfig} />
      </div>
    </BrickAnimation>
  );
}

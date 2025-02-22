import { useCallback, useEffect, useState, MouseEventHandler } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
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

  /**
   * Handles changes in the fullscreen state.
   */
  const handleScreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleScreenChange);
    };
  }, [handleScreenChange]);

  /**
   * Toggles fullscreen mode for the image gallery.
   */
  const handleFullscreenClick = useCallback(async () => {
    try {
      if (!isFullscreen) {
        const galleryElement = document.querySelector('.image-gallery');
        if (galleryElement && galleryElement.requestFullscreen) {
          await galleryElement.requestFullscreen();
        }
      } else if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
        }
      }
    } catch (error: any) {
      console.warn('Fullscreen operation failed:', error.message);
      setIsFullscreen(!isFullscreen);
    }
  }, [isFullscreen]);

  // Configuration for the image gallery
  const galleryItems = images.map(image => ({
    original: image,
    thumbnail: image,
    thumbnailLoading: 'lazy' as 'lazy' | 'eager' | undefined,
    renderItem: (item: any) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
      >
        <img
          src={item.original}
          alt={item.originalAlt || ''}
          className="w-full h-full object-contain"
          loading="lazy" // Add lazy loading for performance
          onError={(e: any) => {
            console.error("Image failed to load:", item.original);
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Available"; // Use placeholder image
          }}
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
      </motion.div>
    ),
  }));

  /**
   * Renders the fullscreen button.
   * @param onClick - The function to call when the button is clicked.
   */
  const renderFullscreenButton = (onClick: MouseEventHandler<HTMLElement>) => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="image-gallery-icon"
      aria-label={t('gallery.fullscreen')}
    >
      <Maximize2 className="w-6 h-6 text-white hover:text-amber-400 transition-colors" />
    </motion.button>
  );

  /**
   * Renders the left navigation button.
   * @param onClick - The function to call when the button is clicked.
   * @param disabled - Whether the button is disabled.
   */
  const renderLeftNav = (onClick: MouseEventHandler<HTMLElement>, disabled: boolean) => (
    <motion.button
      whileHover={{ scale: 1.1, x: -5 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      disabled={disabled}
      className="image-gallery-icon"
      aria-label={t('gallery.prev')}
    >
      <ChevronLeft className="w-6 h-6 text-white hover:text-amber-400 transition-colors" />
    </motion.button>
  );

  /**
   * Renders the right navigation button.
   * @param onClick - The function to call when the button is clicked.
   * @param disabled - Whether the button is disabled.
   */
  const renderRightNav = (onClick: MouseEventHandler<HTMLElement>, disabled: boolean) => (
    <motion.button
      whileHover={{ scale: 1.1, x: 5 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      disabled={disabled}
      className="image-gallery-icon"
      aria-label={t('gallery.next')}
    >
      <ChevronRight className="w-6 h-6 text-white hover:text-amber-400 transition-colors" />
    </motion.button>
  );

  // Configuration options for the ReactImageGallery component.
  const galleryConfig = {
    items: galleryItems,
    showPlayButton: false,
    showFullscreenButton: true,
    showNav: true,
    onScreenChange: handleScreenChange,
    onErrorImageURL: "https://via.placeholder.com/800x600?text=Image+Not+Available",
    useBrowserFullscreen: false,
    onClick: handleFullscreenClick,
    renderFullscreenButton: renderFullscreenButton,
    renderLeftNav: renderLeftNav,
    renderRightNav: renderRightNav,
    labels: {
      showFullscreenButton: t('gallery.fullscreen'),
      previousButton: t('gallery.prev'),
      nextButton: t('gallery.next'),
    },
  };

  return (
    <BrickAnimation index={0}>
      <div className="max-w-4xl mx-auto">
        <ReactImageGallery {...galleryConfig} />
      </div>
    </BrickAnimation>
  );
}

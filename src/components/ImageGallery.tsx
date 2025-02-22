import { useCallback, useEffect, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useTranslation } from 'react-i18next';
import 'react-image-gallery/styles/css/image-gallery.css';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const { t } = useTranslation();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleScreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleScreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleScreenChange);
    };
  }, [handleScreenChange]);

  const handleFullscreenClick = useCallback(async () => {
    try {
      if (!isFullscreen) {
        const element = document.querySelector('.image-gallery');
        if (element && element.requestFullscreen) {
          await element.requestFullscreen();
        }
      } else if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
        }
      }
    } catch (error) {
      console.warn('Fullscreen operation failed:', error);
      // Fallback: update state manually if the fullscreen API fails
      setIsFullscreen(!isFullscreen);
    }
  }, [isFullscreen]);

  const items = images.map(image => ({
    original: image,
    thumbnail: image,
    loading: 'lazy',
  }));

  return (
    <div className="max-w-4xl mx-auto">
      <ReactImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={true}
        showNav={true}
        onScreenChange={handleScreenChange}
        onErrorImageURL="https://via.placeholder.com/800x600?text=Image+Not+Available"
        useBrowserFullscreen={false} // Use our custom fullscreen handling
        onClick={handleFullscreenClick}
        labels={{
          showFullscreenButton: t('gallery.fullscreen'),
          previousButton: t('gallery.prev'),
          nextButton: t('gallery.next'),
        }}
      />
    </div>
  );
}

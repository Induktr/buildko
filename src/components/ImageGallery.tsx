import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const items = images.map(image => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div className="max-w-4xl mx-auto">
      <ReactImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={true}
        showNav={true}
      />
    </div>
  );
}

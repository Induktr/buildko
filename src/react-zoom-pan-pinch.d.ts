declare module 'react-zoom-pan-pinch' {
  import * as React from 'react';

  interface ReactZoomPanPinchProps {
    initialScale?: number;
    maxScale?: number;
    className?: string;
    children: React.ReactNode;
  }

  const ReactZoomPanPinchComponent: React.FC<ReactZoomPanPinchProps>;

  export default ReactZoomPanPinchComponent;
}
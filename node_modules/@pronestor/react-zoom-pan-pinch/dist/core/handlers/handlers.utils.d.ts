import { ReactZoomPanPinchContext } from "../../models";
import { animations } from "../animations/animations.constants";
export declare const handleCalculateButtonZoom: (contextInstance: ReactZoomPanPinchContext, delta: number, step: number) => number;
export declare function handleZoomToViewCenter(contextInstance: ReactZoomPanPinchContext, delta: number, step: number, animationTime: number, animationType: keyof typeof animations): void;
export declare function resetTransformations(contextInstance: ReactZoomPanPinchContext, animationTime: number, animationType: keyof typeof animations): void;
export declare function calculateZoomToNode(contextInstance: ReactZoomPanPinchContext, node: HTMLElement, customZoom?: number): {
    positionX: number;
    positionY: number;
    scale: number;
};
export declare function isValidZoomNode(node: any): boolean;

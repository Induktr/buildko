import { ReactZoomPanPinchProps } from "models";
import React from "react";
export interface ControlsOptionsType {
    name: React.ReactNode;
    type: Array<string>;
    defaultValue: string;
    description: string;
    isObjectRow?: boolean;
}
export type ComponentProps = Record<keyof Omit<ReactZoomPanPinchProps, "children">, Omit<ControlsOptionsType, "name" | "isObjectRow"> | Record<string, Omit<ControlsOptionsType, "name" | "isObjectRow">>>;
export declare const componentPropsTable: Record<string, Omit<ControlsOptionsType, "name">>;
export declare const wrapperPropsTable: ComponentProps;
export declare const componentProps: ControlsOptionsType[];
export declare const wrapperProps: ControlsOptionsType[];

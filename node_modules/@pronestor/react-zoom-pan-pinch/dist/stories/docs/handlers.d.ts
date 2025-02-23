import React from "react";
import { ReactZoomPanPinchHandlers } from "../../models/context.model";
export interface ControlsFnOptionsType {
    name: React.ReactNode;
    type: Array<string>;
    parameters: Array<string>;
    description: string;
    isObjectRow?: boolean;
}
export type ComponentProps = Record<keyof ReactZoomPanPinchHandlers, Omit<ControlsFnOptionsType, "name" | "isObjectRow"> | Record<string, Omit<ControlsFnOptionsType, "name" | "isObjectRow">>>;
export declare const getHandlersTable: () => Array<ControlsFnOptionsType>;
export declare const handlersTable: ComponentProps;

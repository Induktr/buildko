import React from "react";
interface Props {
    children: React.ReactNode;
    wrapperClass?: string;
    contentClass?: string;
    wrapperStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
}
export declare const TransformComponent: React.FC<Props>;
export default TransformComponent;

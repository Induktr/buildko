export declare const argsTypes: {
    alignmentAnimation: {
        defaultValue: import("../../models").DeepNonNullableObject<{
            disabled?: boolean | undefined;
            sizeX?: number | undefined;
            sizeY?: number | undefined;
            animationTime?: number | undefined;
            velocityAlignmentTime?: number | undefined;
            animationType?: "easeOut" | "linear" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" | "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint" | undefined;
        }>;
    };
    centerOnInit: {
        defaultValue: NonNullable<boolean | undefined>;
    };
    centerZoomedOut: {
        defaultValue: NonNullable<boolean | undefined>;
    };
    disabled: {
        defaultValue: NonNullable<boolean | undefined>;
    };
    doubleClick: {
        table: {
            disable: boolean;
        };
    };
    "doubleClick.disabled": {
        defaultValue: NonNullable<boolean | undefined>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "doubleClick.excluded": {
        defaultValue: import("../../models").DeepNonNullableArray<string>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "doubleClick.step": {
        defaultValue: number;
        control: {
            type: string;
            min: number;
        };
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    initialScale: {
        defaultValue: null;
        control: {
            type: string;
        };
    };
    initialPositionX: {
        defaultValue: null;
        control: {
            type: string;
        };
    };
    initialPositionY: {
        defaultValue: null;
        control: {
            type: string;
        };
    };
    limitToBounds: {
        defaultValue: NonNullable<boolean | undefined>;
    };
    maxPositionX: {
        defaultValue: number | null | undefined;
        control: {
            type: string;
        };
    };
    maxPositionY: {
        defaultValue: number | null | undefined;
        control: {
            type: string;
        };
    };
    maxScale: {
        defaultValue: number;
        control: {
            type: string;
        };
    };
    minPositionX: {
        defaultValue: number | null | undefined;
        control: {
            type: string;
        };
    };
    minPositionY: {
        defaultValue: number | null | undefined;
        control: {
            type: string;
        };
    };
    minScale: {
        defaultValue: number;
        control: {
            type: string;
        };
    };
    panning: {
        table: {
            disable: boolean;
        };
    };
    "panning.activationKeys": {
        defaultValue: import("../../models").DeepNonNullableArray<string>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "panning.disabled": {
        defaultValue: NonNullable<boolean | undefined>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "panning.excluded": {
        defaultValue: import("../../models").DeepNonNullableArray<string>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "panning.lockAxisX": {
        defaultValue: NonNullable<boolean | undefined>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "panning.lockAxisY": {
        defaultValue: NonNullable<boolean | undefined>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "panning.velocityDisabled": {
        defaultValue: NonNullable<boolean | undefined>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    pinch: {
        table: {
            disable: boolean;
        };
    };
    "pinch.disabled": {
        defaultValue: NonNullable<boolean | undefined>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "pinch.excluded": {
        defaultValue: import("../../models").DeepNonNullableArray<string>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "pinch.step": {
        defaultValue: number;
        control: {
            type: string;
            min: number;
        };
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    velocityAnimation: {
        defaultValue: import("../../models").DeepNonNullableObject<{
            disabled?: boolean | undefined;
            sensitivity?: number | undefined;
            animationTime?: number | undefined;
            animationType?: "easeOut" | "linear" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" | "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint" | undefined;
            equalToMove?: boolean | undefined;
        }>;
    };
    wheel: {
        table: {
            disable: boolean;
        };
    };
    "wheel.activationKeys": {
        defaultValue: import("../../models").DeepNonNullableArray<string>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "wheel.disabled": {
        defaultValue: NonNullable<boolean | undefined>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "wheel.excluded": {
        defaultValue: import("../../models").DeepNonNullableArray<string>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "wheel.step": {
        defaultValue: number;
        control: {
            type: string;
            min: number;
        };
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    "wheel.touchPadDisabled": {
        defaultValue: NonNullable<boolean | undefined>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    "wheel.wheelDisabled": {
        defaultValue: NonNullable<boolean | undefined>;
        control: {
            type: string;
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    zoomAnimation: {
        defaultValue: import("../../models").DeepNonNullableObject<{
            disabled?: boolean | undefined;
            size?: number | undefined;
            animationTime?: number | undefined;
            animationType?: "easeOut" | "linear" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" | "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint" | undefined;
        }>;
    };
};

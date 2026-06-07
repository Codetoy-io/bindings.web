/**
 * codetoy/input.ts
 *
 * Mouse & keyboard input — imported by user sketches and passed directly
 * as the "codetoy/input" entry in wasmImports.
 */
export declare const mouseX: () => number;
export declare const mouseY: () => number;
export declare const isMouseDown: (button?: number) => boolean;
export declare const isKeyDown: (key: string) => boolean;
export declare const touchCount: () => number;
export declare const isTouchDown: (id: number) => boolean;
export declare const touchX: (id: number) => number;
export declare const touchY: (id: number) => number;
//# sourceMappingURL=input.d.ts.map
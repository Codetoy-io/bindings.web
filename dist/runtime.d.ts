/**
 * codetoy/runtime.ts
 *
 * Internal runtime layer — used only by the playground host.
 * Owns the canvas, event listeners, and animation loop.
 * User sketches never import from here directly.
 */
import * as canvasModule from "./canvas.js";
import * as screenModule from "./screen.js";
import * as timeModule from "./time.js";
import * as inputModule from "./input.js";
export interface WasmExports {
    update?: () => void;
    resize?: (w: number, h: number) => void;
    onMouseDown?: (btn: number) => void;
    onMouseUp?: (btn: number) => void;
    onKeyDown?: (key: string) => void;
    onKeyUp?: (key: string) => void;
    onTouchStart?: (id: number, x: number, y: number) => void;
    onTouchEnd?: (id: number) => void;
    onTouchMove?: (id: number, x: number, y: number) => void;
}
export interface RuntimeOptions {
    container?: HTMLElement;
    clearEachFrame?: boolean;
    showFocusOverlay?: boolean;
    onError?: (err: unknown) => void;
}
export declare let canvas: HTMLCanvasElement;
export declare let ctx: CanvasRenderingContext2D;
export declare let canvasWidth: number;
export declare let canvasHeight: number;
export declare let pixelRatio: number;
export declare let startTime: number;
export declare let lastFrame: number;
export declare let frameCount: number;
export declare let cachedDelta: number;
export declare let touchPoints: Map<number, {
    x: number;
    y: number;
}>;
export declare let primaryTouchX: number;
export declare let primaryTouchY: number;
export declare let isTouching: boolean;
export declare let mouseX: number;
export declare let mouseY: number;
export declare let mouseButtons: boolean[];
export declare let keys: Record<string, boolean>;
/** Call once to set up the canvas and start the loop. */
export declare function init(opts?: RuntimeOptions): HTMLCanvasElement;
/**
 * Swap in a fresh set of WASM exports after each recompile.
 * The loop and event listeners keep running uninterrupted.
 */
export declare function setExports(e: WasmExports | null): void;
/** The static imports object to pass to every instantiate() call. */
export declare const wasmImports: {
    "codetoy/canvas": typeof canvasModule;
    "codetoy/screen": typeof screenModule;
    "codetoy/time": typeof timeModule;
    "codetoy/input": typeof inputModule;
};
/** Stop the render loop. */
export declare function stop(): void;
/** Resume the render loop if stopped. */
export declare function start(): void;
export declare function _resetCtx(): void;
//# sourceMappingURL=runtime.d.ts.map
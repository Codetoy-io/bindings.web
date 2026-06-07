/**
 * codetoy/time.ts
 *
 * Timing — imported by user sketches and passed directly
 * as the "codetoy/time" entry in wasmImports.
 *
 * cachedDelta is written once per frame by the runtime loop,
 * so deltaTime() returns a stable value no matter how many
 * times user code calls it in a single frame.
 */
export declare const deltaTime: () => number;
export declare const elapsedTime: () => number;
//# sourceMappingURL=time.d.ts.map
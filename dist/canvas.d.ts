/**
 * codetoy/canvas.ts
 *
 * Drawing API — imported by user sketches and passed directly
 * as the "codetoy/canvas" entry in wasmImports.
 */
export declare function reset(): void;
export declare function push(): void;
export declare function pop(): void;
export declare function noFill(): void;
export declare function noStroke(): void;
export declare function fill(r: number, g: number, b: number, a?: number): void;
export declare function fillStyle(color: string): void;
export declare function stroke(r: number, g: number, b: number, a?: number): void;
export declare function strokeStyle(color: string): void;
export declare function lineWidth(w: number): void;
export declare function lineJoin(s: CanvasLineJoin): void;
export declare function lineMiterLimit(l: number): void;
export declare function lineCap(s: CanvasLineCap): void;
export declare function rect(x: number, y: number, w: number, h: number, r?: number): void;
export declare function circle(x: number, y: number, radius: number): void;
export declare function line(x1: number, y1: number, x2: number, y2: number): void;
export declare function arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
export declare function ellipse(x: number, y: number, w: number, h: number): void;
export declare function triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
export declare function polygon(points: number[]): void;
export declare function scale(x: number, y: number): void;
export declare function rotate(radians: number): void;
export declare function translate(x: number, y: number): void;
export declare function resetTransform(): void;
export declare function beginPath(): void;
export declare function closePath(): void;
export declare function fillPath(): void;
export declare function strokePath(): void;
export declare function moveTo(x: number, y: number): void;
export declare function lineTo(x: number, y: number): void;
export declare function bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
export declare function quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
export declare function font(family: string, size: number, weight?: string): void;
export declare function text(content: string, x: number, y: number): void;
export declare function measureText(content: string): number;
//# sourceMappingURL=canvas.d.ts.map
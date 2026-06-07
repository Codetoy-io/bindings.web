/**
 * codetoy/canvas.ts
 *
 * Drawing API — imported by user sketches and passed directly
 * as the "codetoy/canvas" entry in wasmImports.
 */
import { ctx, _resetCtx, pixelRatio } from "./runtime.js";
// ─── State stack ──────────────────────────────────────────────────────────────
export function reset() { _resetCtx(); drawFill = drawStroke = true; }
export function push() { ctx.save(); }
export function pop() { ctx.restore(); }
// ─── Color ────────────────────────────────────────────────────────────────────
let drawFill = true;
let drawStroke = true;
export function noFill() { drawFill = false; }
export function noStroke() { drawStroke = false; }
export function fill(r, g, b, a = 1.0) {
    drawFill = true;
    ctx.fillStyle = `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},${a})`;
}
export function fillStyle(color) {
    drawFill = true;
    ctx.fillStyle = color;
}
export function stroke(r, g, b, a = 1.0) {
    drawStroke = true;
    ctx.strokeStyle = `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},${a})`;
}
export function strokeStyle(color) {
    drawStroke = true;
    ctx.strokeStyle = color;
}
// ─── Line state ───────────────────────────────────────────────────────────────
export function lineWidth(w) { ctx.lineWidth = w; }
export function lineJoin(s) { ctx.lineJoin = s; }
export function lineMiterLimit(l) { ctx.miterLimit = l; }
export function lineCap(s) { ctx.lineCap = s; }
// ─── Shapes ───────────────────────────────────────────────────────────────────
export function rect(x, y, w, h, r = 0) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
    ctx.closePath();
    if (drawFill)
        ctx.fill();
    if (drawStroke)
        ctx.stroke();
}
export function circle(x, y, radius) {
    ctx.beginPath();
    ctx.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
    ctx.closePath();
    if (drawFill)
        ctx.fill();
    if (drawStroke)
        ctx.stroke();
}
export function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    if (drawStroke)
        ctx.stroke();
}
export function arc(x, y, radius, startAngle, endAngle, anticlockwise = false) {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.closePath();
    if (drawFill)
        ctx.fill();
    if (drawStroke)
        ctx.stroke();
}
export function ellipse(x, y, w, h) {
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
    ctx.closePath();
    if (drawFill)
        ctx.fill();
    if (drawStroke)
        ctx.stroke();
}
export function triangle(x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    if (drawFill)
        ctx.fill();
    if (drawStroke)
        ctx.stroke();
}
export function polygon(points) {
    if (points.length < 2)
        return;
    ctx.beginPath();
    ctx.moveTo(points[0], points[1]);
    for (let i = 2; i < points.length; i += 2)
        ctx.lineTo(points[i], points[i + 1]);
    ctx.closePath();
    if (drawFill)
        ctx.fill();
    if (drawStroke)
        ctx.stroke();
}
// ─── Transforms ───────────────────────────────────────────────────────────────
export function scale(x, y) { ctx.scale(x, y); }
export function rotate(radians) { ctx.rotate(radians); }
export function translate(x, y) { ctx.translate(x, y); }
export function resetTransform() { ctx.resetTransform(); ctx.scale(pixelRatio, pixelRatio); } // need to also reset the scale
// ─── Advanced path ────────────────────────────────────────────────────────────
export function beginPath() { ctx.beginPath(); }
export function closePath() { ctx.closePath(); }
export function fillPath() { ctx.fill(); }
export function strokePath() { ctx.stroke(); }
export function moveTo(x, y) { ctx.moveTo(x, y); }
export function lineTo(x, y) { ctx.lineTo(x, y); }
export function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) { ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y); }
export function quadraticCurveTo(cpx, cpy, x, y) {
    ctx.quadraticCurveTo(cpx, cpy, x, y);
}
// ─── Text ─────────────────────────────────────────────────────────────────────
export function font(family, size, weight = "normal") {
    ctx.font = `${weight} ${Math.floor(size)}px ${family}`;
}
export function text(content, x, y) {
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(content, x, y);
}
export function measureText(content) {
    return ctx.measureText(content).width;
}
//# sourceMappingURL=canvas.js.map
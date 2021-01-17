RGBA(`
float channel(vec2 p, float t) {
    float a = atan(p.x, -p.y);
    float w = sin(a * 8.0 + t * 3.0) * sin(t + a);  
    float d = length(p) - w * 0.015 * smoothstep(-1.0, 1.0, abs(a));
    d = abs(d - 0.2);
    return smoothstep(0.005, 0.0005, d);
}

void main() {
    vec2 p = gl_FragCoord.xy / resolution - 0.5;
    p.y *= resolution.y / resolution.x;
    gl_FragColor = vec4(
        channel(p, time * 0.7),
        channel(p, time * 0.9 + 1.0),
        channel(p, time * 1.1 + 2.0),
        1.0);
}
`, {
    debug: true
});
window.onload = function() {
    var canvas = document.getElementById('space');
    var w = 0,
        h = 0;
    var gl = canvas.getContext('webgl');
    var fsBtn = document.querySelector('.fullscreen');

    function res() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        gl.viewport(0, 0, w, h);
    }
    res();
    window.onresize = res;
    var stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);
    for (i in gl) {
        gl[i[0] + i[6]] = gl[i];
    }
    gl.uniform = gl.uniform1f;
    vx = 0;
    vy = 0;
    speedX = Math.random() * (1 / 1000) - (1 / 2000);
    speedY = Math.random() * (1 / 1000) - (1 / 2000);
    x = Math.random() * 1000000;
    y = Math.random() * 1000000;
    var p = gl.createProgram();
    gl.shaderSource(s = gl.createShader(gl.VERTEX_SHADER),
        `
        attribute vec2 p;
        void main() {
            gl_Position=vec4(p, 1, 1);
        }
        `
    );
    gl.compileShader(s);
    gl.attachShader(p, s);
    gl.shaderSource(s = gl.createShader(gl.FRAGMENT_SHADER),
        `
        precision mediump float;
        uniform float vx, vy, x, y;
        void main() {
            vec3 f = vec3(gl_FragCoord.rg / 1080. - .5, 1.);
            float c = .5 + x / 500., v = .5 + y / 500.;
            mat2 m = mat2(cos(c), sin(c), -sin(c), cos(c)), s = mat2(cos(v), sin(v), -sin(v), cos(v));
            f.rb *= m;
            f.rg *= s;
            vec3 r = vec3(0., 0., -2.);
            r += vec3(vx, vy, 0);
            r.rb *= m;
            r.rg *= s;
            float g = .1, b = 1.;
            vec3 i = vec3(0.);
            for (int l = 0; l < 36; l+=6) {
                vec3 o = r + g * f * .5;
                o = abs(vec3(1.) - mod(o, vec3(2.)));
                float e, n = e = 0.;
                for (int d = 0; d < 18; d++) {
                    o = abs(o) / dot(o, o) - .53;
                    n += abs(length(o) - e);
                    e = length(o);
                }
                if (l > 10) {
                    b *= 1. - max(0., .3 - n * n * .001);
                }
                i += b + vec3(g, g * g, g * g * g * g) * n * n * n * .0015 * b;
                b *= .73;
                g += .2;
            }
            i = mix(vec3(length(i)), i, .85);
            gl_FragColor = vec4(i * .01, 1.);
        }
        `
    );
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.getShaderInfoLog(s).trim().split("\n").forEach(ss =>
            console.warn("[shader] " + ss))
        throw new Error("Error while compiling shader")
    }
    gl.attachShader(p, s);
    gl.linkProgram(p);
    gl.useProgram(p);
    gl.bindBuffer(g = gl.ARRAY_BUFFER, gl.createBuffer());
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.BYTE, 0, 0, 0);
    gl.bufferData(g, new Int8Array([-3, 1, 1, -3, 1, 1]), gl.STATIC_DRAW);

    function loop() {
        stats.begin();
        gl.uniform(gl.getUniformLocation(p, 'vx'), vx);
        gl.uniform(gl.getUniformLocation(p, 'vy'), vy);
        vx += speedX;
        vy += speedY;
        gl.uniform(gl.getUniformLocation(p, 'x'), x);
        gl.uniform(gl.getUniformLocation(p, 'y'), y);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 3);
        stats.end();
        requestAnimationFrame(loop);
    }
    loop();
    canvas.onclick = function() {
        x = Math.random() * 1000000;
        y = Math.random() * 1000000;
        speedX = Math.random() * (1 / 1000) - (1 / 2000);
        speedY = Math.random() * (1 / 1000) - (1 / 2000);
    }
    fsBtn.onclick = function() {
        fsBtn.classList.toggle('active');
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }
}
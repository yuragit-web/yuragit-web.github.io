window.onload = function() {
    var canvas = document.getElementById('space');
    var w = 0,
        h = 0;
    var gl = canvas.getContext('webgl');

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

    // Canvas methods hashing:
    // This loop creates tiny shortcuts for all the webgl context's methods/constants we need:
    // createProgram => cP
    // shaderSource => sS
    // createShader => cS
    // compileShader => ce
    // attachShader => aS
    // linkProgram => lo
    // useProgram => ug
    // bindBuffer => bf
    // createBuffer => cB
    // enableVertexAttribArray => eV
    // vertexAttribPointer => vA
    // bufferData => bD
    // getUniformLocation => gf
    // drawArrays => dr
    // NO_ERROR => NO (value = 0)
    // FRAGMENT_SHADER => FN (value: 35632)
    // ELEMENT_ARRAY_BUFFER_BINDING => ET (value: 34965)
    // We need to redefine the webgl context because adding the textarea in the DOM rewrote the canvas "a".
    for (i in gl) {
        gl[i[0] + i[6]] = gl[i];
    };
    // we use only one uniofrom
    gl.u = gl.uniform1f;
    // x,y: cords
    vx = 0;
    vy = 0;
    speedX = Math.random() * (1 / 1000) - (1 / 2000);
    speedY = Math.random() * (1 / 1000) - (1 / 2000);
    x = Math.random() * 1000000;
    y = Math.random() * 1000000;
    // Use the gl context's scope for all the following code
    with(gl) {
        // Define a new program
        // p=createProgram();
        p = cP();
        // Basic vertex shader
        // shaderSource(s=createShader(VERTEX_SHADER),"attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}");
        sS(
            s = cS(VERTEX_SHADER),
            `
        attribute vec2 p;
        void main() {
            gl_Position=vec4(p, 1, 1);
        }
        `
        );
        // Compile and attach it to the program
        // compileShader(s);
        ce(s);
        //attachShader(p,s);
        aS(p, s);
        // Main program
        // shaderSource(s=createShader(FRAGMENT_SHADER),'...');
        sS(
            s = cS(FRAGMENT_SHADER),
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
        // Compile and attach it to the program
        // compileShader(s);
        ce(s);
        // DEBUGS
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            gl.getShaderInfoLog(s).trim().split("\n").forEach(ss =>
                console.warn("[shader] " + ss))
            throw new Error("Error while compiling shader")
        };
        // attachShader(p,s);
        aS(p, s);
        // Link and start the program
        //linkProgram(P);
        lo(p);
        //useProgram(p);
        ug(p);
        // Define a big triangle the canvas, containing the viewport
        // bindBuffer(g=ARRAY_BUFFER, createBuffer());
        bf(g = ARRAY_BUFFER, cB());
        // enableVertexAttribArray(0);
        eV(0);
        // vertexAttribPointer(0, 2, BYTE, 0, 0, 0);
        vA(0, 2, BYTE, 0, 0, 0);
        // bufferData(g,new Int8Array([-3, 1, 1, -3, 1, 1]), STATIC_DRAW);
        bD(g, new Int8Array([-3, 1, 1, -3, 1, 1]), STATIC_DRAW);
        // Main loop
        (L = function() {
            stats.begin();
            //Move
            u(gf(p, 'vx'), vx);
            u(gf(p, 'vy'), vy);
            vx += speedX;
            vy += speedY;
            // Coordinates
            u(gf(p, 'x'), x);
            u(gf(p, 'y'), y);
            // Draw
            // drawArrays(TRIANGLE_FAN,0,3);
            dr(TRIANGLE_FAN, 0, 3);
            // Next frame
            stats.end();
            requestAnimationFrame(L);
        })();
    };

    canvas.onclick = function() {
        x = Math.random() * 1000000;
        y = Math.random() * 1000000;
        speedX = Math.random() * (1 / 1000) - (1 / 2000);
        speedY = Math.random() * (1 / 1000) - (1 / 2000);
    };
}
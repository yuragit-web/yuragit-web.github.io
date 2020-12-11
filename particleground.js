! function(window, document) {
    'use strict'

    let defaults = {
        dotColor: '#555555',
        dotSize: 2,
        minSpeed: 0.2,
        maxSpeed: 0.5,
        dotPerPixels: 15000,
        lineColor: '#555555',
        dotsDist: 100,
        lineWidth: 1
    };

    window.ParticleGround = function(element, options) {
        return plugin(element, options);
    };

    function extend(defaults, options) {
        let extended = {};
        for (let prop in defaults) {
            if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
                extended[prop] = defaults[prop];
            }
        }
        for (let prop in options) {
            if (Object.prototype.hasOwnProperty.call(options, prop)) {
                extended[prop] = options[prop];
            }
        }
        return extended;
    };

    function plugin(element, options) {
        let canvasSupport = !!document.createElement('canvas').getContext;
        let canvas, ctx, cWidth, cHeight;
        let dots, dotCounter, anim;
        options = extend(defaults, options);

        function init() {
            console.clear();
            dots = [];
            if (!canvasSupport) {
                let err = document.createElement('h1');
                err.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: red; z-index: 1000;';
                err.innerText = 'Canvas not supported';
                document.body.appendChild(err);
                setTimeout(() => {
                    document.body.removeChild(err);
                }, 3000);
                return;
            } else if (!element) {
                let err = document.createElement('h1');
                err.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: red; z-index: 1000;';
                err.innerText = 'Incorrectly selected element';
                document.body.appendChild(err);
                setTimeout(() => {
                    document.body.removeChild(err);
                }, 3000);
                return;
            }
            canvas = document.createElement('canvas');
            canvas.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%;';
            element.appendChild(canvas);
            ctx = canvas.getContext('2d');

            window.addEventListener('resize', () => {
                resize();
            });

            reset();

            start();
        };

        function reset() {
            cWidth = window.innerWidth;
            cHeight = window.innerHeight;
            canvas.width = cWidth;
            canvas.height = cHeight;
            dotCounter = ((cWidth * cHeight) / options.dotPerPixels) >> 0;
        };

        function resize() {
            reset();
            for (let i = 0; i < dots.length; i++) {
                let dot = dots[i];
                if (dot.x < dot.size - 1 || dot.x > cWidth - dot.size + 1 || dot.y < dot.size - 1 || dot.y > cHeight - dot.size + 1) {
                    dots.splice(i, 1);
                }
            }
            while (dotCounter > dots.length) {
                newDot();
            }
            if (dotCounter < dots.length) {
                dots.splice(dotCounter, 1);
            }
        };

        function pause() {
            window.cancelAnimationFrame(anim);
        };

        function start() {
            draw();
        };

        function destroy() {
            pause();
            canvas.parentNode.removeChild(canvas);
        };

        function newDot() {
            let dot = {
                size: options.dotSize / 2,
                currentSize: 0,
                color: options.dotColor,
                x: (Math.random() * cWidth) >> 0,
                y: (Math.random() * cHeight) >> 0,
                xOff: randompm(options.minSpeed, options.maxSpeed),
                yOff: randompm(options.minSpeed, options.maxSpeed)
            };
            dots.push(dot);
        };

        function randompm(min, max) {
            return Math.random() > 0.5 ? random(min, max) : -random(min, max);
        };

        function random(min, max) {
            return (Math.random() * max) + min;
        }

        function rotate(v, theta) {
            return [v[0] * Math.cos(theta) - v[1] * Math.sin(theta), v[0] * Math.sin(theta) + v[1] * Math.cos(theta)];
        };

        function draw() {
            //Clear canvas
            ctx.clearRect(0, 0, cWidth, cHeight);
            //Add dots
            if (dots.length < dotCounter && Math.random() > 0.5) {
                newDot();
            }
            for (let i = 0; i < dots.length; i++) {
                let dot = dots[i];
                if (dot.x < dot.size - 1 || dot.x > cWidth - dot.size + 1 || dot.y < dot.size - 1 || dot.y > cHeight - dot.size + 1) {
                    dots.splice(i, 1);
                }
                //Horizontal collision
                if (dot.x < dot.size || dot.x > cWidth - dot.size) {
                    dot.xOff *= -1;
                }
                //Vertical collision
                if (dot.y < dot.size || dot.y > cHeight - dot.size) {
                    dot.yOff *= -1;
                }
                //Move
                dot.x += dot.xOff;
                dot.y += dot.yOff;
                //Dot size
                if (dot.currentSize < dot.size) {
                    dot.currentSize += 0.1;
                } else if (dot.currentSize > dot.size) {
                    dot.currentSize = dot.size;
                }
                //Draw dot
                ctx.beginPath();
                ctx.arc(dot.x * 1, dot.y * 1, dot.currentSize, 0, 2 * Math.PI);
                ctx.fillStyle = dot.color;
                ctx.fill();
                for (let j = i; j < dots.length; j++) {
                    if (i === j) {
                        continue;
                    }
                    let dot2 = dots[j];
                    let dx = dot2.x - dot.x;
                    let dy = dot2.y - dot.y;
                    let d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
                    let rd = dot.currentSize + dot2.currentSize;
                    //Draw line
                    if (d < options.dotsDist) {
                        let lineAlpha = (1 - d / options.dotsDist) * (dot.currentSize / dot.size) * (dot2.currentSize / dot2.size) * 0.5;
                        ctx.beginPath();
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(dot2.x, dot2.y);
                        ctx.lineWidth = options.lineWidth;
                        ctx.strokeStyle = options.lineColor;
                        ctx.stroke();
                    }
                    //Dots collision
                    if (d < rd) {
                        let res = [dot.xOff - dot2.xOff, dot.yOff - dot2.yOff];
                        if (res[0] * (dot2.x - dot.x) + res[1] * (dot2.y - dot.y) >= 0) {
                            let m = [Math.PI * Math.pow(dot.size, 2), Math.PI * Math.pow(dot2.size, 2)];
                            let theta = -Math.atan2(dot2.y - dot.y, dot2.x - dot.x);
                            let v = [rotate([dot.xOff, dot.yOff], theta), rotate([dot2.xOff, dot2.yOff], theta)];
                            let u = [rotate([v[0][0] * (m[0] - m[1]) / (m[0] + m[1]) + v[1][0] * 2 * m[1] / (m[0] + m[1]), v[0][1]], -theta), rotate([v[1][0] * (m[1] - m[0]) / (m[0] + m[1]) + v[0][0] * 2 * m[0] / (m[0] + m[1]), v[1][1]], -theta)];
                            dot.xOff = u[0][0];
                            dot.yOff = u[0][1];
                            dot2.xOff = u[1][0];
                            dot2.yOff = u[1][1];
                        }
                    }
                }
            }
            //Animation
            anim = window.requestAnimationFrame(draw);
        };

        init();

        return {
            init: init,
            start: start,
            pause: pause,
            destroy: destroy
        };
    }
}(window, document);
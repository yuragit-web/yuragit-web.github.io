var glslEditor = {};

window.onload = function () {
    init();
};

function init() {
    glslEditor = new GlslEditor('#glsl_editor', {
        canvas_size: 300,
        canvas_draggable: false,
        canvas_resizable: true,
        theme: 'monokai',
        multipleBuffers: true,
        watchHash: true,
        fileDrops: true,
        menu: true,
    });
    document.body.style.backgroundColor = window
        .getComputedStyle(glslEditor.editor.getWrapperElement(), null)
        .getPropertyValue('background-color');
}

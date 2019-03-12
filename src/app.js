
let {
    windowHeight: height,
    windowWidth: width,
} = wx.getSystemInfoSync()

PIXI.utils.isWebGLSupported = () => true

const app = new PIXI.Application({
    view: canvas,
    width: width * pixelRatio,
    height: height * pixelRatio,
    roundPixels: true,
    sharedLoader: true,
    sharedTicker: true,
    autoResize: false,
    antialias: false,
    backgroundColor: 0x171a2
})

export default app;
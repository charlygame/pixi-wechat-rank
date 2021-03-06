// import {fgui} from '../libs/fairygui';
import {wxLoader} from './wxLoader';

let {
    pixelRatio,
    windowHeight,
    windowWidth
} = wx.getSystemInfoSync()

// pixelRatio = Math.min(1, pixelRatio);
PIXI.utils.isWebGLSupported = () => true
// console.log(wxLoader);
const openDataContext = wx.getOpenDataContext();
let sharedCanvas = openDataContext.canvas;
const app = new PIXI.Application({
    view: canvas,
    width: windowWidth * pixelRatio,
    height:  windowHeight * pixelRatio,
    roundPixels: true,
    sharedLoader: true,
    sharedTicker: true,
    autoResize: false,
    antialias: false,
    backgroundColor: 0x171a24
})

app.renderer.plugins.interaction.mapPositionToPoint = (point, x, y) => {
    point.x = x * pixelRatio
    point.y = y * pixelRatio
}
/**
 * 加载背景图
 */
let container = new PIXI.Container();
let bkg = PIXI.Sprite.fromImage('static/bkg.jpg');
bkg.scale.set(1.5, 1);
container.addChild(bkg);
app.stage.addChild(container);

/**
 * 准备sharedCanvas纹理
 */
let texture = PIXI.Texture.fromLoader(sharedCanvas);
let openContextSp = new PIXI.Sprite(texture);
container.addChild(openContextSp);
openContextSp.visible = false;

function draw() {
    let texture = PIXI.Texture.fromLoader(sharedCanvas);
    openContextSp.texture = texture;
    requestAnimationFrame(draw);
}   


/**
 * 小恶魔按钮 
 */

let btn = PIXI.Sprite.fromImage('static/eggHead.png');
btn.x = 1136 / 2;
btn.y = 640 / 2;
container.addChild(btn);
btn.interactive = true;
btn.buttonMode = true;
btn.on('pointertap', (event) =>  {
    console.log('鼠标点击');
    console.log(event);
    requestAnimationFrame(draw); 
    openContextSp.visible = true;    // showRank();

});

// fgui.GRoot.inst.attachTo(app);
/**
 * 加载排行榜资源
 */
let HOST_URL = 'http://dev.yunyun-local.com:8003/fui/';
console.log(wxLoader);
wxLoader.add([
    {
        name: "pixi-rank",
        url:  HOST_URL + "pixi-rank.fui",
        type: wxLoader.RES_TYPE.FUI
    },
    {
        name: 'pixi-rank@atlas0',
        url: HOST_URL + "pixi-rank@atlas0.png",
        type: wxLoader.RES_TYPE.IMG
    }
]).complete((resources)=>{
    // 
    openDataContext.postMessage({
        ...resources
    });
})

export default app;
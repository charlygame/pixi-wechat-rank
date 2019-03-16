import {fgui} from '../../libs/fairygui';
import { str2ab } from './utils';
const sharedCanvas = wx.getSharedCanvas()

let {
    pixelRatio,
    windowHeight,
    windowWidth
} = wx.getSystemInfoSync();

PIXI.utils.isWebGLSupported = () => false

// const context = sharedCanvas.getContext('2d');
// context.fillStyle = 'red';
// context.fillRect(0,0,100,100);

const app = new PIXI.Application({
    view: sharedCanvas,
    width: windowWidth * pixelRatio,
    height:  windowHeight * pixelRatio,
    // roundPixels: true,
    // sharedLoader: true,
    // sharedTicker: true,
    forceCanvas: true,
    autoResize: false,
    antialias: false,
    backgroundColor: 0x171a24
})

app.renderer.plugins.interaction.mapPositionToPoint = (point, x, y) => {
    point.x = x * pixelRatio
    point.y = y * pixelRatio
}

// let container = new PIXI.Container();
// let bkg = PIXI.Sprite.fromImage('static/bkg.jpg');
// bkg.on('loaded', () => {
//     bkg.scale.set(windowWidth/ bkg.width, windowHeight / bkg.height);
// })
// container.addChild(bkg);

// app.stage.addChild(container);
fgui.GRoot.inst.attachTo(app);
// let HOST_URL = 'http://dev.yunyun-local.com:8003/fui/';

// let loader = new fgui.utils.AssetLoader();
// loader.add("pixi-rank", HOST_URL + "pixi-rank.fui", { loadType: PIXI.loaders.Resource.LOAD_TYPE.XHR, xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER })
//             .add("pixi-rank@atlas0", HOST_URL + "pixi-rank@atlas0.png")
//             .load( () => {

//                 fgui.UIPackage.addPackage('pixi-rank');
//                 let ins = fgui.UIPackage.createObject('pixi-rank', 'rank');
//                 fgui.GRoot.inst.addChild(ins);        

//             })

let loader = new fgui.utils.AssetLoader();

let Resource = PIXI.loaders.Resource;

var wxLoader = {}

wxLoader.RES_TYPE = {
   IMG: 1,
   FUI: 2 
}

wx.onMessage(data => {
    console.log('>>>>>开放域接受数据');

    let resources = {};
    for (let name in data) {
        let resData = data[name];
        let resource = new Resource(name, '', {});
        if (resData.type == wxLoader.RES_TYPE.IMG) {
            
            let img = wx.createImage();
            img.src = resData.data;
            resource.data = img;
            resource.texture = PIXI.Texture.fromLoader(img);

        } else if (resData.type == wxLoader.RES_TYPE.FUI) {
            resource.data = str2ab(resData.data)
            console.log(resource.data);
        }
        resources[name]  = resource;
    }

    fgui.utils.AssetLoader.addResources(resources);
    fgui.UIPackage.addPackage('pixi-rank');
    let ins = fgui.UIPackage.createObject('pixi-rank', 'rank');
    fgui.GRoot.inst.addChild(ins);   

});
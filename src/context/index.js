import {fgui} from '../../libs/fairygui';
import { str2ab } from './utils';
import EventHandler from './EventHandler';

const sharedCanvas = wx.getSharedCanvas()

const eventHandler = new EventHandler(sharedCanvas);
eventHandler.enable(true);

let {
    pixelRatio,
    windowHeight,
    windowWidth
} = wx.getSystemInfoSync();

PIXI.utils.isWebGLSupported = () => false


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

fgui.GRoot.inst.attachTo(app);

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

    // app.stage.on('pointerdown', () => {
    //     console.log('>>>>鼠表按下处理');
    // });

   

});
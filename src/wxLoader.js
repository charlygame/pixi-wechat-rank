import {ab2str, str2ab } from './utils';

var wxLoader = {}

wxLoader.RES_TYPE = {
   IMG: 1,
   FUI: 2 
}

wxLoader._resources = {};
/**
 *  处理图片资源 获取临时url
 */
function _handleImg (res) {
        
    return new Promise(function(resolve, reject) {

        wx.downloadFile({
            url: res.url,
            success: (data) => {
                if (data.statusCode === 200) {
                    wxLoader._resources[res.name] = {
                                                        data: data.tempFilePath,
                                                        type: res.type,
                                                        name: res.name
                    }
                    resolve();
                    
                } else {
                    reject();
                }
            }    
        });
    });
}

/**
 * 处理fgui文件
 * @param {资源配置} res 
 */
function _handleFgui(res) {
    // let fileSystemManager = wx.getFileSystemManager();
    console.log(res);
    return new Promise(function(resolve, reject){
        // wx.request({
        //     url: res.url,
        //     header: {
        //          'content-type': 'application/x-www-form-urlencoded'
        //     },
        //     dataType: 'arraybuffer',
        //     success: (data)=>{
        //         console.log('fgui 返回数据')
        //         console.log(data);
        //         wxLoader._resources[res.name] ={ 
        //                                             data: data.data,
        //                                             type: res.type,
        //                                             name: res.name
        //                                         }
        //         resolve();
        //     }
        // })
            wx.downloadFile({
            url: res.url,
            success: (data) => {
                if (data.statusCode === 200) {

                    let fileSystemManager = wx.getFileSystemManager();    
                    fileSystemManager.readFile({
                        filePath: data.tempFilePath,
                        success: (data) => {
                            wxLoader._resources[res.name] = {
                                                        data: ab2str(data.data),
                                                        // data: data.data,
                                                        type: res.type,
                                                        name: res.name
                            }
                            // console.log(data.data);
                            // let str = ab2str(data.data)
                            // console.log(str);
                            // console.log(str2ab(str));
                            resolve();
                        }
                    })
                } else {
                    reject();
                }
            }    
        });
    });
}

/**
 * resList []
 * res {
 *  name: string,
 *  url: string,
 *  Type: 
 * }
 */
wxLoader.add = function (resList) {
    
    let promiseList = [];

    if (Array.isArray(resList)) {
        resList.map((res)=> {
            if (res.type === wxLoader.RES_TYPE.IMG) {
                promiseList.push(_handleImg(res));

            } else if (res.type === wxLoader.RES_TYPE.FUI) {
                promiseList.push(_handleFgui(res));
            }
        })
    }
    console.log(promiseList);
    Promise.all(promiseList).then(()=> {
        if (wxLoader._complete) {
            wxLoader._complete(wxLoader._resources);
        }
    })
    return wxLoader;
}

wxLoader.complete = (func) => {
    wxLoader._complete = func;
};

export { wxLoader };


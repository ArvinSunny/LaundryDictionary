// /**
//  * 网络请求的公共方法
//  */

// // 获取系统信息
// const system = wx.getSystemInfoSync()

// // 获取客户端信息
// const clientInfo = {
//   "clientType":"mp",
//   "appname":"tiyuetiyu",
//   "model": system.model,
//   "os":system.system,
//   "screen":system.screenWidt + "*" + system.Height,
//   "version":App.version,
//   "chennel":"miniprogram"
// }

// let website = 'https://meiyike1.zzdqkj.com'
// // 封装请求方法 
// module.exports = {
//   get:(url, data={}) => {
//     return new Promise((resolve, reject) => {
//       wx.request({
//         url: website + url,
//         data,
//         method: 'GET',
//         header: {
//           "clientInfo": JSON.stringify(clientInfo)
//         },
//         success: (res) => {
//           console.log(res)
//           if('ok' === res.data.state){
//             resolve(res.data.data)
//           } else {
//             wx.showToast({
//               title: res.data.msg,
//               mask: true,
//               icon:'none'
//             })
//           }
//         },
//         fail:(e = {code:-1, msg:errMsg, errMsg}) => {
//           let msg = e.errMsg
//           if(msg = "request:fail timeout"){
//             msg:"请求超时，请稍后重试"
//           }
//           wx.showToast({
//             title: msg,
//             icon:"none"
//           })
//           reject(e)
//         }
//       })
//     })
//   },
//   post:(url, data={}) => {
//     return new Promise((resolve, reject) => {
//       wx.request({
//         url: website + url,
//         data,
//         method: 'POST',
//         header: {
//           "clientInfo": JSON.stringify(clientInfo)
//         },
//         success:(res) => {
//           if('ok' === res.state){
//             resolve(res.data)
//           } else {
//             wx.showToast({
//               title: res.data.msg,
//               mask: true,
//               icon:'none'
//             })
//           }
//         },
//         // fail:(e = {code:number = -1, msg:any = errMsg, errMsg}) => {
//         //   let msg = e.errMsg
//         //   if(msg = "request:fail timeout"){
//         //     msg:"请求超时，请稍后重试"
//         //   }
//         //   wx.showToast({
//         //     title: msg,
//         //     icon:"none"
//         //   })
//         //   reject(e)
//         // }
//       })
//     })
//   }  
// }
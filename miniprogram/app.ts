// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    console.log('sys',wx.getWindowInfo());
    
    console.log('cccccc',wx.getMenuButtonBoundingClientRect());
    

    // 登录
    wx.login({
      success: res => {
        console.log('resCode',res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})
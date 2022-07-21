// components/navBar/navBar.ts
Component({
  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached() {
      /**
       * 获取状态栏信息
       */
      try {
        // 获取导航栏信息
        wx.getSystemInfo({
          success: res => {
            this.setData({
              statusBarHeight: res.statusBarHeight,
              navBar: res.screenHeight - res.windowHeight - res.statusBarHeight
            })
          }
        })

        // 获取胶囊信息
        const a = wx.getMenuButtonBoundingClientRect()
        this.setData({
          bounding: a.height,
        })

      } catch (error) {
        console.log(error);

      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

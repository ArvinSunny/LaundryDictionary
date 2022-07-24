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
       // 胶囊信息
        const menuObject = wx.getMenuButtonBoundingClientRect()
        console.log(menuObject);
        
        wx.getSystemInfo({
          success: res => {
            console.log(res); 
            console.log(res.statusBarHeight + menuObject.height + 2 * (menuObject.top - res.statusBarHeight));
            
            this.setData({
              statusBarHeight: res.statusBarHeight,
              navBar: res.statusBarHeight + menuObject.height + 2 * (menuObject.top - res.statusBarHeight)
            })
            
            
          }
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
    haveBack: false,
    statusBarHeight: 0, // 状态栏的高度
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

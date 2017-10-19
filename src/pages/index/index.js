Page({
  /**
   * 页面的初始数据
   */
  data: {
    txt:"按钮列表",
    btntxt:"点击改变下面内容",
    show:true,
    news:["a","b","c"]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },

// 按钮事件
  defaultClick:function(){
    console.log("default按钮被点击")
  },
  priClick:function(){
    var newsdata=this.data.news;
      newsdata.shift();
    var isShow=this.data.show;
    this.setData({txt:"这是新的内容",show:!isShow,news:newsdata})

  }
})
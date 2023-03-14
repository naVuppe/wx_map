// pages/map/map.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        longitude: 104.066128,
        latitude: 30.572924,
        // q: 地图上为什么没有显示标记点
        // a: 因为我在地图上添加了标记点，但是没有设置标记点的宽高，所以标记点是不显示的
        // q: 为什么我设置了标记点的宽高，但是标记点还是不显示

        markers: [{
            id: 1,
            longitude: 104.066128,
            latitude: 30.572924,
            iconPath: '/images/my_marker.png',
            width: 30,
            height: 30,
            // callout: {
            //     content: '我是一个标记点',
            //     color: '#fff',
            //     fontSize: 14,
            //     borderRadius: 5,
            //     bgColor: '#000',
            //     padding: 5,
            //     display: 'ALWAYS'
            // }
        }]
    },
    getAddress() {
        console.log('获取了位置');
        wx.showLoading({
            title: '加载中'
        });
        this.setData({
            longitude: 104.066128,
            latitude: 30.572924
        });
        wx.clearStorageSync()
        wx.getLocation({
            altitude: true,
            highAccuracyExpireTime: 0,
            isHighAccuracy: true,
            type: 'wgs84',
            success: (result) => {
                console.log('result', result);
                this.setData({
                    longitude: result.longitude,
                    latitude: result.latitude,
                })
            },
            fail: (res) => {
                () => {

                }
            },
            complete: (res) => { },
        })
        setTimeout(() => {
            wx.hideLoading()
        }, 1000)
    },
    // 重新获取位置
    againAddress() {
        this.onLoad()
    },
    // 地图标记点
    addMarker(data) {
        console.log('data', data);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getAddress()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
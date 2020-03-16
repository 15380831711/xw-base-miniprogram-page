//获取应用实例
// import { IMyApp } from "../../app";

import appService from '../../providers/app-service/app-service';
import alertService from '../../providers/alert-service/alert-service';
import wxService from '../../providers/wx-service/wx-service';
import { WxBindRes, WxShareBtnRes, WxShareData } from "../../providers/constants/index";

// const app = getApp<IMyApp>();

Page({
    appService: appService,
    alertService: alertService,
    wxService: wxService,

    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     * options: any
     */
    onLoad(options: any) {
        console.log(options);
        this.wxService.setPageTitle("page title");
    },

    /**
     * 页面跳转
     */
    toPage(e: WxBindRes) {
        this.appService.push(e.currentTarget.dataset.page);
    },

    /**
     * 显示alert
     */
    showAlert() {
        this.alertService.alert("提示信息");
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
    onShareAppMessage(res: WxShareBtnRes) {
        let shareData: WxShareData = new WxShareData();
        shareData.title = "分享标题";
        if (wxService.isFromButton(res)) {
        }
        if (wxService.isFromMenu(res)) {
            shareData.path = wxService.getCurrentPagePath();
        }
        return shareData;
    }

});
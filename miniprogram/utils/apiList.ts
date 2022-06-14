/**
 * 将所有的api封装成一个对象， 并对外暴露
 */
export const apiList = {
  login: '/api/Xcx/DengLu', //登录接口
  salesRoom: '/api/User/Get_MenDian_ByID', // 获取门店信息
  distributionRecords: '/api/User/user_get_distributionrecordslist', //获取分销记录
  purchasedActivitylist: '/api/User/user_get_purchased_activitylist', //已购买活动信息
  complaintsSuggestions: '/api/User/user_complaints_suggestions', // 投诉或建议
  getUserInfo: '/api/Xcx/GetXinXi_ByYhid', // 获取用户信息
  coupon: '/api/User/user_get_purchased_coupon_byid', // 获取单个已购买券信息
  couponList: '/api/User/user_get_couponlist', //已获得优惠券列表
  activity: '/api/User/user_get_purchased_activity_byid', // 获取单个已购买信息
  activityBuy: '/api/User/user_purchase_activity_byid', // 用户购买活动方法
  activityInfo: '/api/User/user_get_activity_byid', // 用户获取单个活动信息
  allSaleRoom: 'Get_SuoYouMenDian', //获取所有门店(预约和附近门店使用)
}
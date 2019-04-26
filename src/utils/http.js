
import Taro from '@tarojs/taro'

// var BASE_URL = 'https://clinic.100care.cn';
// var BASE_URL = 'https://sit.100care.cn';
// var BASE_URL = 'http://192.168.0.159:8080';
var BASE_URL = '/api';


var header = {
  'content-type': 'application/x-www-form-urlencoded',
  //斯曼口腔
  'settingCode':'Taroc_120523'
  // 'settingCode':'Taroc_82302'
//   'settingCode':'Taroc_117863'
}


function getReq(url,params,headParam,showLoading) {
    if(!showLoading){
        Taro.showLoading({
            title: '加载中',
          })
    }
 
 
   
  var promise = new Promise((resolve, reject) => {
    Taro.request({
      url: BASE_URL + url,
      method: 'get',
      data:params,
      header: header,
      success: function (res) {
        Taro.hideLoading();
        if (res.statusCode == '200') {
          if (res.data.resultCode != '1000' && res.data.resultMsg) {
            Taro.showToast({
              title: res.data.resultMsg,
              icon: 'none'
            })
          }
          resolve(res.data);
        } else {//返回错误提示信息
          Taro.showModal({
            title: '网络错误',
            content: '网络出错，请刷新重试',
            showCancel: false
          })
          reject(false);
        }
      },
      fail: function () {
        Taro.hideLoading();
        Taro.showModal({
          title: '网络错误',
          content: '网络出错，请刷新重试',
          showCancel: false
        })
        reject(false)
      }
    })
  })
  return promise;
}

function postReq(url, data,headParam,showLoading) {
    if(!showLoading){
        Taro.showLoading({
            title: '加载中',
          })
    }
  if(headParam){
    header=Object.assign(header,headParam)
  }
  var promise = new Promise((resolve, reject) => {
    Taro.request({
      url: BASE_URL + url,
      header: header,
      data:data,
      method: 'post',
      success: function (res) {
        
        Taro.hideLoading();
        if (res.statusCode == '200') {
          if (res.data.resultCode != '1000' && res.data.resultMsg){
            Taro.showToast({
              title: res.data.resultMsg,
              icon:'none'
            })
          }
          resolve(res.data);
        } else {//返回错误提示信息
          Taro.showModal({
            title: '网络错误',
            content: '网络出错，请刷新重试',
            showCancel: false
          })
          reject(false);
        }
      },
      fail: function () {
        Taro.hideLoading();
        Taro.showModal({
          title: '网络错误',
          content: '网络出错，请刷新重试',
          showCancel: false
        })
        reject(false)
      }
    })
  })
  return promise;
}

const upLoadImg=BASE_URL+"/100care-wechat/commonController/wechat/uploadimage"
const http = {
  get: getReq,
  post: postReq,
  header: header,
  upLoadImg,
  base:BASE_URL
} 
export default http
// var http = require('http.js')
import  http from './http'
//100care 开发配置
var otherParam={
srAppId:"wxd78843bf5613c8f7",
srAppSecret:"6c5ed52d38b9ab87209b0a3d3e465054"
}
export function getClinicBaseinfo(){
  return http.post('/100care-wechat/clinicController/wechat/getClinicBaseinfo');
}
//解密手机号   /100care-wechat/commonController/smallroutine/deciphering
export function decryptPhone(data,headParam){

    return http.get('/100care-wechat/commonController/smallroutine/deciphering',data,headParam,1)
}





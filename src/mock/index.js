//   index.js
import Mock from "mockjs"
import * as HomeApi from "./api"

// console.log(HomeApi)
//post处理
Mock.mock("/toplist/songs","post",HomeApi.Songs)
//get处理
Mock.mock(/^\/home\/getlist/,"get",HomeApi.Store)

export default Mock
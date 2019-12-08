import Mock from 'mockjs'
import * as HomeApi from './api'
// Mock.mock('/newCD/hotList', 'post', HomeApi.hot)
// Mock.mock('/newCD/allList', 'post', HomeApi.all)
Mock.mock('/newCD/newList', 'post', HomeApi.New)

//post处理
Mock.mock("/toplist/songs","post",HomeApi.Songs)
//get处理
Mock.mock(/^\/home\/getlist/,"get",HomeApi.Store)

Mock.mock('/dan','get',HomeApi.produceData);
export default Mock

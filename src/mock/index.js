import Mock from 'mockjs'
import * as HomeApi from './api'
// Mock.mock('/newCD/hotList', 'post', HomeApi.hot)
// Mock.mock('/newCD/allList', 'post', HomeApi.all)
Mock.mock('/newCD/newList', 'post', HomeApi.New)
export default Mock

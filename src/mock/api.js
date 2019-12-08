import Mock from 'mockjs';
const Random = Mock.Random;
export function New() {
  var newList = [],
    listNum1 = [],
    listNum2 = [],
    listNum3 = [],
    listNum4 = [],
    listNum5 = [],
    listNum6 = [],
    listNum7 = [],
    listNum8 = [],
    listNum9 = [],
    listNum10 = [],
    hotList1 = [],
    hotList2 = [],
    hotList3 = [],
    hotList4 = [],
    hotList5 = [],
    hotList6 = [],
    hotList7 = [],
    hotList8 = [],
    hotList9 = [],
    hotList10 = [],
    allList1 = [],
    allList2 = [],
    allList3 = [],
    allList4 = [],
    allList5 = [],
    allList6 = [],
    allList7 = [],
    allList8 = [],
    allList9 = [],
    allList10 = [];
  db(hotList1, allList1, listNum1)
  db(hotList2, allList2, listNum2)
  db(hotList3, allList3, listNum3)
  db(hotList4, allList4, listNum4)
  db(hotList5, allList5, listNum5)
  db(hotList6, allList6, listNum6)
  db(hotList7, allList7, listNum7)
  db(hotList8, allList8, listNum8)
  db(hotList9, allList9, listNum9)
  db(hotList10, allList10, listNum10)

  newList.push(listNum1, listNum2, listNum3, listNum4, listNum5, listNum6, listNum7, listNum8, listNum9, listNum10)
  return {
    New: newList
  }

  function db(hot, all, num) {
    for (let i = 0; i < 10; i++) {
      let obj = {
        id: i,
        name: Random.name(),
        title: Random.title(),
        img: Random.image('130x130', '', 'Music')
      }
      hot.push(obj)
    }
    for (let i = 0; i < 35; i++) {
      let obj = {
        id: i,
        name: Random.name(),
        title: Random.title(),
        img: Random.image('130x130', '', 'Music')
      }
      all.push(obj)
    }
    num.push(hot, all)
  }
}

export function Songs() {
  var Dan = []
  for (let i = 0; i < 28; i++) {
    var songs = []
    for (let a = 0; a < 100; a++) {
      var obj = {
        songLength: a+1,
        class: "positon",
        img: Random.image("50X50"),
        name: Random.ctitle(),
        time: Random.time(),
        author: Random.cname(),
      }
      songs.push(obj)
    }
    var obj2 = {
        id:i,
        titImg:Random.image("150X150"),
        title:Random.ctitle(),
        date:Random.date(),
        update:"每天更新",
        shoucang:Random.int(),
        share:Random.int(),
        write:Random.int(),
        num:Random.int(),
        bofang:Random.int(),
        songs:songs
    }
    Dan.push([obj2])
  }
  
  return {
      Dan
  }
}

export function Store(){
    let List = []
    for(var i=0 ;i<20;i++){
        var data = {
            bigImg:Random.image('263X263'),
            tag:Random.name(),
            title:Random.ctitle(), 
            nowPrice:Random.int(),
            oldPrice:Random.int(),
        }
        List.push(data)
    }
    return {
        List
    }
}

export function produceData(){
  let Articles=[];
      for (let i=0; i< 1000; i++){
          var newArticleObject={
              title:Random.csentence(10,30),//随机生成一段文字
              name:Random.cname(),
              img:Random.image("140x140","#ccc" ,"music"),
              number:Math.floor(Math.random() * 999999),
              id:i
          }
          Articles.push(newArticleObject)
      }
     
      
          
   return{
    Articles
   }
  
  }
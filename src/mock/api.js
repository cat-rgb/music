import Mock from "mockjs"
var Random = Mock.Random

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
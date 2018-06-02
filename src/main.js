// let index = 0;
// let len = 6;
!function init() {
  opData()
  count()
  // roll() 
}()

// setInterval(function () {
//   opData()
// }, 2000);
function opData() {
  // let ul = document.getElementsByClassName('content-list');
  // if (index > data.length) {
  //   index = 0;
  //   len = 6
  // }
  // let arr = data.slice(index, len)
  // index = index + 6;
  // len = len + 6;
  // ul[0].innerHTML = '';
  data.forEach((ele, index)=> {
    createList(ele, index)
  })
}
function count() {
  let span = document.getElementsByClassName('count')[0].children[0];
  let len = data.length;
  span.innerHTML = `一共 ${len} 条心愿`;
  console.log(span);
}

function createList(ele, index) {
  
  let ul = document.getElementsByClassName('content-list');
  let li = document.createElement('li');
  // index = index * 2;
  li.innerHTML = ele;
 
  if (index % 2) {
    li.style.backgroundColor = '#f31055';
    li.style.color = '#fff';
  }
  // if (index/6 === 1) {
  //   li.style.backgroundColor = '#3f3f3f';
  //   li.style.color = '#fff';
  // }
  
  ul[0].appendChild(li);
  
}

// function roll() {
//   var area =document.getElementsByClassName('content')[0];
//   var con1 = document.getElementsByClassName('content-list')[0];
//   var con2 = document.getElementsByClassName('content-list1')[0];
//   con2.innerHTML=con1.innerHTML;
//   function scrollUp(){
//   if(area.scrollTop>=con1.offsetHeight){
//       area.scrollTop=0;
//   }else{
//       area.scrollTop = area.scrollTop + 1;
//   }
//   }                
//   var time = 10;
//   var mytimer=setInterval(scrollUp,time);
//   // area.onmouseover=function(){
//   //     clearInterval(mytimer);
//   // }
//   // area.onmouseout=function(){
//   //     mytimer=setInterval(scrollUp,time);
//   // }
// }

setTimeout(change,3000); 
	function upscroll(){
		var content = $(".commentBox-content");
    var offset = ($(".commentBox-content").find("li").eq(0).height()+35)*-1 + "px";
    console.log(offset)
		content.stop().animate({top:offset},2000,function(){
			var first = $("li").first();
			$(".commentBox-content").append(first);
			$(".commentBox-content").css("top","0px");
		});
		
		setTimeout(change,3000);
	}
	
	function change(){
		upscroll();
	}
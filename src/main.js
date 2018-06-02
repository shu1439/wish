// let index = 0;
// let len = 6;
!function init() {
  opData()
  count(data)
  search()
}()

// setInterval(function () {
//   opData()
// }, 2000);
function opData() {
  let ul = document.getElementsByClassName('content-list');
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
    createList(ele, index, ul[0]);
  })
}
function count(arr) {
  let span = document.getElementsByClassName('count')[0].children[0];
  let len = arr.length;
  span.innerHTML = `共 ${len} 条心愿`;
}

function createList(ele, index, dom) {
  
  
  let li = document.createElement('li');
  li.innerHTML = ele;
 
  if (index % 2) {
    li.style.backgroundColor = '#f31055';
    li.style.color = '#fff';
  }
  
  dom.appendChild(li);
  
}


setTimeout(change,3000); 
	function upscroll(){
		var content = $(".commentBox-content");
    var offset = ($(".commentBox-content").find("li").eq(0).height()+35)*-1 + "px";
		content.stop().animate({top:offset},2000,function(){
			var first = $("li").first();
			$(".commentBox-content").append(first);
			$(".commentBox-content").css("top","0px");
		});
		
		setTimeout(change,3000);
	}

function change() {
  upscroll();
}

function search() {
  let search = document.getElementsByClassName('in-edit')[0];
  let btn = document.getElementsByClassName('btn')[0];
  let list = document.getElementsByClassName('content-list');
  btn.addEventListener('click', function () {
    if (!search.value) {
      return;
    }
    list[1].innerHTML = '';
    list[0].style.display = 'none';
    list[1].style.display = 'block';
    let word = search.value;
    let result = data.filter( ele => ele.indexOf(word) !== -1);
    count(result);
    result.forEach((ele, index) => {
      createList(ele, index, list[1]);
    })
    
    search.value = '';
  }, false);
}
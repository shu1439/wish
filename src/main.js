let index = 0;
let len = 6;
!function init() {
  opData()
}()

setInterval(function () {
  opData()
}, 2000);
function opData() {
  let ul = document.getElementsByClassName('content-list');
  if (index > data.length) {
    index = 0;
    len = 6
  }
  let arr = data.slice(index, len)
  index = index + 6;
  len = len + 6;
  console.log(index);
  ul[0].innerHTML = '';
  arr.forEach(ele => {
    console.log(ele)
    createList(ele)
  })
}

function createList(ele) {
  
  let ul = document.getElementsByClassName('content-list');
  let li = document.createElement('li');
  li.innerHTML = ele;
  ul[0].appendChild(li);
  
}
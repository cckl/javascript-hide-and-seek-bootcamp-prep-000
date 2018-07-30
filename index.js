function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div div')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < list.length; i++) {
    let listItem = list[i];
    listItem.innerHTML = (i + n)
    // this worked both when i used parseInt and when i didn't
  }
}

function deepestChild () {
  // return document.querySelector('#grand-node div div div div')
  
  const list = document.querySelectorAll('#grand-node')
  for (let i = 0; i < list.length; i++) {
    if (list[i].textContent !== undefined) {
      return list[i]
    }
  }
}
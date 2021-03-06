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
  const list = document.querySelectorAll('#grand-node div')
  const lastItem = list.length-1
  return list[lastItem]
}
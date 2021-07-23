/**Function to sort values on Sort button click */
function sortNode() {
  var list, i, changing, items, shouldChange;
  list = document.getElementById("shuffleAndSort");
  changing = true;
  while (changing) {
    changing = false;
    items = list.getElementsByTagName("LI");
    for (i = 0; i < (items.length - 1); i++) {
      shouldChange = false;
      if (items[i].innerHTML > items[i + 1].innerHTML) {
        shouldChange = true;
        break;
      }
    }
    if (shouldChange) {
      items[i].parentNode.insertBefore(items[i + 1], items[i]);
      changing = true;
    }
  }
}

/**Function to shuffle values on Shuffle button click */
window.onload = function () {
  var shuffleList = document.getElementById("shuffleAndSort");

  function shuffle(val) {
    let currentVal = val.slice(0);
    let temp, randomVal;
    let i = currentVal.length
    while (--i) {
      randomVal = Math.floor(i * Math.random());
      temp = currentVal[randomVal];
      currentVal[randomVal] = currentVal[i];
      currentVal[i] = temp;
    }
    return currentVal;
  }

  function shuffleNode() {
    let nodes = shuffleList.children;
    let i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
      shuffleList.appendChild(nodes[i]);
      ++i;
    }
  }
  document.getElementById("shuffle").onclick = shuffleNode;

}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  let clickedNode = ev.target;
  if (clickedNode.tagName === 'LI') {
    clickedNode.classList.toggle('checked');
    let completedList = document.getElementById("myCompleted");
    var time = new Date();
    var timeStr = time.getDate() + "." + (time.getMonth() + 1);
    clickedNode.querySelector(".date").innerHTML += "-" + timeStr;
    completedList.append(clickedNode);
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;

  var t = document.createTextNode(inputValue);
  li.append(t);

  var time = new Date();
  var timeStr = time.getDate() + "." + (time.getMonth() + 1);
  t.after(document.createElement("span"));
  li.querySelector("span").innerHTML = timeStr;
  li.querySelector("span").className = "date";

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myTODO").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
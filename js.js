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
var list = document.getElementById('myTODO');
list.addEventListener('click', function(ev) {
  let clickedNode = ev.target;
  if (clickedNode.tagName === 'LABEL') {
    clickedNode = clickedNode.parentNode;
  }
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

  var label = document.createElement("label");
  label.innerHTML = inputValue;
  li.append(label);
  var input = document.createElement("input");
  li.append(input);
  li.querySelector("input").setAttribute("type", "text");

  var time = new Date();
  var timeStr = time.getDate() + "." + (time.getMonth() + 1);
  li.append(document.createElement("span"));
  li.querySelector("span").innerHTML = timeStr;
  li.querySelector("span").className = "date";

  var editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.className = "edit-button";
  editButton.onclick = (ev) => {
    if(li.classList.contains("editMode")){
      label.innerText = input.value;
    } else {
      input.value = label.innerText;
    }
    li.classList.toggle("editMode");
  }
  li.append(editButton);

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
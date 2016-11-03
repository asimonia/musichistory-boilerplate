var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");
var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("home-view");
var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var left = document.getElementById("left");
var right = document.getElementById("right");
var addForm = document.getElementById("addForm");


addLink.addEventListener("click", function() {
  homeView.classList.add("hidden");
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

  left.classList.add("hidden");
  right.classList.add("hidden");
  addForm.classList.add("visible");
  addForm.classList.remove("hidden");

});

/*
listLink.addEventListener("click", function(event) {
  event.preventDefault();
  homeView.classList.add("hidden");
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});
*/
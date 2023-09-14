var coll = document.getElementsByClassName("collapse");

// console.log('Loaded?', coll.length)

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display === "grid") {
        content.style.display = "none";
    } else {
        content.style.display = "grid";
    }
  });
}

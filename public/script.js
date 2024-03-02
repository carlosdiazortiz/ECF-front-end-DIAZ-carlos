document.querySelector(".xIcon").addEventListener("click", function() {
  document.querySelector("menu").classList.toggle('showMenu');
  this.classList.toggle("change");
  document.querySelector(".big-logo").classList.toggle('big-logo-push');
});

var modal = document.getElementById("myModal");

var img = document.getElementsByClassName("image");
for(var i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function() {
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  })
}

var span = document.getElementsByClassName("close")[0];
span.addEventListener("click", function() {
  modal.style.display ="none";
})

  




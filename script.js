var popup = document.getElementById("popup");
var semua = document.querySelectorAll(".produk");

for (var i = 0; i < semua.length; i++) {
  semua[i].onclick = function () {
    document.getElementById("popup-foto").src = this.querySelector("img").src;
    document.getElementById("popup-nama").innerText = this.querySelector("h3").innerText;
    document.getElementById("popup-info").innerText = this.querySelector(".deskripsi").innerText;
    popup.style.display = "flex";
  };
}

document.getElementById("tutup").onclick = function () {
  popup.style.display = "none";
};
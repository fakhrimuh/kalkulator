let tombol = document.querySelector(".container-tombol");
let layar = document.querySelector("#layar");
let historyListWrapper = document.querySelector(".history-list-wrapper");

function hapus() {
  var yakin = confirm("Apakah anda yakin history teratas anda dihapus?");
  if (yakin) {
    let historyList = document.querySelector(".history-list");
    historyList.remove();
  } else {
    alert("history teratas tidak dihapus");
  }
}

function historySection() {
  let history = document.querySelector(".history");
  if (history.style.display === "none") {
    history.style.display = "block";
  } else {
    history.style.display = "none";
  }
}

tombol.addEventListener("click", function (e) {
  var tombolClick = e.target;
  var nilaiTombol = tombolClick.innerText;

  if (nilaiTombol == "AC") {
    layar.value = "";
  } else if (nilaiTombol == "<") {
    layar.value = layar.value.slice(0, -1);
  } else if (nilaiTombol == "=") {
    para = document.createElement("p");
    para.classList.add("history-list");
    para.innerText = layar.value + nilaiTombol + " " + eval(layar.value);
    historyListWrapper.appendChild(para);
    layar.value = eval(layar.value);
  } else {
    layar.value = layar.value + nilaiTombol;
  }
});

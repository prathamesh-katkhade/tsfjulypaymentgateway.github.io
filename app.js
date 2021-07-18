donate = document.querySelector("#donateButton");
modal = document.querySelector("#modal");

function modalOpen() {
    modal.style.display = "block";
}
function modalClose() {
    modal.style.display = "none";
}

document.getElementById("donateButton").addEventListener("click", modalOpen);
document.getElementById("cross").addEventListener("click", modalClose);
// var imgArray = ['Rfflri94rs8','MMJx78V7xS8','EBbP0Wrbmqs','Dag9cv89jb4','3U3Qegatt2o'];


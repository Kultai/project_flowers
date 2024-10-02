document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var modal = document.getElementById("orderModal");
    modal.style.display = "flex";
  });

document.querySelector(".close-btn").addEventListener("click", function () {
  var modal = document.getElementById("orderModal");
  modal.style.display = "none";
});

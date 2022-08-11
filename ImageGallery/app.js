const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("All");
    }
    this.classList.add("All");
    const target = this.getAttribute("data-target");

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
      if (target == "All-images") {
        items[k].style.display = "block";
      }
    }
  });
}

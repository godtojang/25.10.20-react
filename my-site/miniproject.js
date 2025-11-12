const navlist = document.querySelectorAll(".nav-tab");
navTabs.forEach((tab) => {
  tab.addEventListener("click", function (event) {
    event.preventDefault();
    navTabs.forEach((t) => {
      t.classList.remove("active");
    });
    this.classList.add("active");
  });
});

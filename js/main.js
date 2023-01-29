// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;

var drop = document.getElementById("drop");
var dropBtn = document.getElementById("dropBtn");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  drop.classList.remove("active");
  dropBtn.classList.remove("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    drop.classList.remove("active");
    dropBtn.classList.remove("active");
  }
  if (event.target == drop) {
    drop.classList.remove("active");
    dropBtn.classList.remove("active");
  }
};
dropBtn.onclick = function () {
  drop.classList.toggle("active");
  dropBtn.classList.toggle("active");
};
// menu end

const gallery = document.querySelectorAll(".galleryItem");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector("#modalClose");

const setModalActive = (i) => {
  modal.classList.add("active");
  body.classList.add("active");
  $("#gallerySlider").slick("slickGoTo", i);
  $("#gallerySlider").slick("refresh");
};
modalClose.onclick = function () {
  modal.classList.remove("active");
  body.classList.remove("active");
};
gallery.forEach((item, index) => {
  item.addEventListener("click", () => {
    setModalActive(index);
  });
});

// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end

// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.pageYOffset >= header.clientHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
  drop.classList.remove("active");
  dropBtn.classList.remove("active");
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end

// slider start
$(".modal__inner").each(function (index, element) {
  let $slickElement = $(element);
  $slickElement.slick({
    infinite: true,
    slidesToShow: 1,
    sldesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    fade: true,
  });
});
// slider end

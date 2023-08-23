const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    console.log(entry.intersectionRatio)

    if (entry.isIntersecting) {
      images.forEach(image => {
        image.classList.remove("active")
      })
      switch (entry.target.dataset.itemScroll) {
        case "01":
          timelineTrack.style.height = "0%"
          document.querySelector(".image-01").classList.add("active")
          break;
        case "02":
          timelineTrack.style.height = "32%"
          document.querySelector(".image-02").classList.add("active")
           break;
        case "03":
          timelineTrack.style.height = "52%"
          document.querySelector(".image-03").classList.add("active")
           break;
        case "04":
          timelineTrack.style.height = "74%"
          document.querySelector(".image-04").classList.add("active")
           break;
        case "05":
          timelineTrack.style.height = "100%"
          document.querySelector(".image-05").classList.add("active")
           break;
        default:
          break;
    }

    } else {
      return
    }
  });
}, { threshold: 1, rootMargin: "-32px" });

const timelineTrack = document.querySelector(".timeline-track")
const elements = document.querySelectorAll(".item-scroll");
const images = document.querySelectorAll(".image-scroll");
elements.forEach((element) => observer.observe(element));

// button toggle

let toggleActive = "01"

function handleButtonToggleActive(e, buttonId){

  buttonToggle.forEach((button) => {
    button.classList.remove("toggle-active")
  })
  e.target.classList.add("toggle-active")

  if(buttonId === "01"){
    mosaico.classList.add("container-toggle-active")
    carrosel.classList.remove("container-toggle-active")
  } else {
    carrosel.classList.add("container-toggle-active")
    mosaico.classList.remove("container-toggle-active")
  }

}

const buttonToggle = document.querySelectorAll(".button-toggle")
const containerToggle = document.querySelector(".container-toggle")
const mosaico = document.querySelector(".mosaico")
const carrosel = document.querySelector(".carrosel")

buttonToggle.forEach(button => {
  button.addEventListener("click", (e) => {
    handleButtonToggleActive(e, e.target.dataset.buttonToggle)
  })
})

// accordion

const accordion = document.querySelectorAll(".accordion-item");

const accordionVisibleClass = "accordion-active";

const accordionHandleClick = (e) => {

  const alreadyHasActive = e.target.parentNode.classList.contains(
    accordionVisibleClass
  );
  if (alreadyHasActive) {
    e.target.parentNode.classList.remove(accordionVisibleClass);
  } else {
    accordion.forEach((acc) => {
      acc.classList.remove(accordionVisibleClass);
    });

    e.target.parentNode.classList.add(accordionVisibleClass);
  }
};

accordion.forEach((accItem) => {
  accItem.addEventListener("click", accordionHandleClick);
});

const rotate01 = document.querySelector("#rotate-01")
const rotate02 = document.querySelector("#rotate-02")


let pageOffset = 0
window.addEventListener("scroll", (e) => {

  let calcTranslate = window.pageYOffset / 120
  rotate02.style.transform = `translateX(${calcTranslate}%)`
  rotate01.style.transform = `translateX(-${calcTranslate}%)`


})


const observerWeb = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("intersect-show");
      entry.target.classList.remove("intersect-hidden");
    } else {
      entry.target.classList.add("intersect-hidden");
      entry.target.classList.remove("intersect-show");
    }
  });
});

const header = document.querySelector("#header");
const headernavbar = document.querySelector("#header-navbar");
const buttonnavbar = document.querySelector("#button-navbar");
const callButton = document.querySelector("#call-button");

buttonnavbar.addEventListener("click", (e) => {
  let isActive = headernavbar.classList.contains("show-navbar")
  if(isActive){
    headernavbar.classList.remove("show-navbar")
  } else {
    headernavbar.classList.add("show-navbar")
  }
})

const elementsObserver = document.querySelectorAll(".intersect");
elementsObserver.forEach((element) => observerWeb.observe(element));


window.onscroll = function () {
  handleScroll();
};



const handleScroll = () => {
  if (window.pageYOffset > 90) {
    header.classList.add("bg-header-fixed");
    headernavbar.style.backgroundColor = "#FFFFFF"
    buttonnavbar.children[0].children[0].style.stroke = "#282828"
    buttonnavbar.children[0].children[1].style.stroke = "#282828"
    buttonnavbar.children[0].children[2].style.stroke = "#282828"
    document.querySelector("#logo").children[0].children[0].style.fill = "#282828"
    callButton.classList.add("call-btn-fixed")
    callButton.children[1].children[0].style.fill  = "#ffffff"

  } else {
    header.classList.remove("bg-header-fixed");
    headernavbar.style.backgroundColor = "#4824F9"
    buttonnavbar.children[0].children[0].style.stroke = "#ffffff"
    buttonnavbar.children[0].children[1].style.stroke = "#ffffff"
    buttonnavbar.children[0].children[2].style.stroke = "#ffffff"
    document.querySelector("#logo").children[0].children[0].style.fill = "#ffffff"
    callButton.classList.remove("call-btn-fixed")
    callButton.children[1].children[0].style.fill  = "#4824F9"

  }
};

const openModal = document.querySelector("#open-modal")
const closeModal = document.querySelector("#close-modal")
const videoContainer = document.querySelector("#video-container")


openModal.addEventListener("click", () => {
  videoContainer.classList.add("modal-active")
})
closeModal.addEventListener("click", () => {
  videoContainer.classList.remove("modal-active")
})

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    videoContainer.classList.remove("modal-active")
  }
};
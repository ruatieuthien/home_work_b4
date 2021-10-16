// BOM: window, location, screen, history

const modal = document.getElementsByClassName('modal')[0]
console.log(modal)
// const imageModal = document.getElementsByClassName('full-img')[0]
// console.log(imageModal)
const imageModal = document.querySelector('.full-img')
console.log(imageModal)

// Tạo sự kiện click, doi url image va show popup
// .addEventListener()
const listImage = document.querySelectorAll('.img-container img')
console.log(listImage)

listImage.forEach(element => {
    element.addEventListener('click', function() {
        // Open modal
        modal.classList.add('open')
        const attrImg = element.getAttribute('alt')
        // Set new url image
        imageModal.src = 'img/full/'+attrImg+'.jpg'
    })
});

modal.addEventListener('click',(e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    };
});

// Demo, làm tiếp yêu cầu scroll
// const links = document.querySelectorAll(".nav-link");
// links.forEach((item) => {
//     item.addEventListener("click", () => {
//         const el = document.getElementById(item.getAttribute("data-link"));
//         el.scrollIntoView({behavior:"smooth", block:"end"})
//     })
// })

// Bai 4.1
const sectionBook = document.getElementById('books');
const scrollToBook = function () {
    sectionBook.scrollIntoView();
}

const sectionimage = document.getElementById('images');
const scrollToImg = function () {
    sectionimage.scrollIntoView();
}
const sectionmovie = document.getElementById('movies');
const scrollToMovie = function () {
    sectionmovie.scrollIntoView();
}
const sectioncolor = document.getElementById('colors');
const scrollToColor = function () {
    sectioncolor.scrollIntoView();
}


// Bai 4.2
function getNumberRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function changeRandom(){
  let btnRandom = document.querySelector(".btn_change_random");
  btnRandom.addEventListener("click", e => {
    let c1= Math.round(getNumberRandom(0, 255));
    let c2= Math.round(getNumberRandom(0, 255));
    let c3= Math.round(getNumberRandom(0, 255));


    addColor(c1,c2,c3);
  });
}

changeRandom();

function addColor(c1 =0 , c2 =0, c3 =0) {
  let box_color = document.querySelector(".box_show_color");
  let text = document.querySelector(".text_color");
  box_color.style.backgroundColor = "rgb("+c1+","+c2+","+c3+")";
  text.style.color = "rgb("+c1+","+c2+","+c3+")";
}

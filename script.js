//Add All images
var images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg",
    "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg",
    "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg",
    "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
    "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg",
    "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg",
    "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg",
    "35.jpg", "36.jpg", "37.jpg", "36.jpg", "39.jpg",
    "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg",
    "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg",
    "50.jpg",
];
var path = "./Images/";
var column1 = document.getElementById("column1");
var column2 = document.getElementById("column2");
var column3 = document.getElementById("column3");
var column4 = document.getElementById("column4");
var column5 = document.getElementById("column5");
var image, src;

//Load Image When Page is Load
window.addEventListener("load", () => {
    for (var j = 0; j < 5; j++) {
        for (i = 1; i <= 5; i++) {
            src = this.path + Math.floor(Math.random() * images.length) + ".jpg";
            image = `<img onclick="reply_click(this.src)" src="${src}">`;
            if (i == 1) { this.column1.innerHTML += image; }
            if (i == 2) { this.column2.innerHTML += image; }
            if (i == 3) { this.column3.innerHTML += image; }
            if (i == 4) { this.column4.innerHTML += image; }
            if (i == 5) { this.column5.innerHTML += image; }
        }
    }
}
);

//Load Image When Page is completed view(scroll = 100)
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    console.log(scrollPercentRounded);
    if (scrollPercentRounded == 100) {
        for (var j = 0; j < 5; j++) {
            for (var i = 1; i <= 5; i++) {
                src = this.path + Math.floor(Math.random() * images.length) + ".jpg";
                image = `<img onclick="reply_click(this.src)" src="${src}">`
                if (i == 1) { this.column1.innerHTML += image; }
                if (i == 2) { this.column2.innerHTML += image; }
                if (i == 3) { this.column3.innerHTML += image; }
                if (i == 4) { this.column4.innerHTML += image; }
                if (i == 5) { this.column5.innerHTML += image; }
            }
        }

    }
});

// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

function reply_click(clicked_src) {
    modal.style.display = "block";
    modalImg.src = clicked_src;
}
var span = document.getElementsByClassName("close");
document.getElementById("close").onclick = function () {
    modal.style.display = "none";
}

// Slider 1
const images1 = [
  "https://www.westside.com/cdn/shop/files/C1_06_1920X900_LOUNGE_SHOP.jpg?v=1725004601",
  "https://www.westside.com/cdn/shop/files/C1_08_1920X900_SHOP_LINGERIE.jpg?v=1725004634",
  "https://www.westside.com/cdn/shop/files/C1_09_1920X900_SHOP_CURVY.jpg?v=1725004662",
  "https://www.westside.com/cdn/shop/files/C1_01_1920X900_DENIMFAM.gif?v=1725004254",
  "https://www.westside.com/cdn/shop/files/C1_02_1920X900_DRESS_SHOP.jpg?v=172500431",
  "https://www.westside.com/cdn/shop/files/C1_03_1920X900_SHOP_WOMEN.jpg?v=1725004385",
  "https://www.westside.com/cdn/shop/files/C1_11_1920X900_FOOTWEAR.jpg?v=1725004414",
  "https://www.westside.com/cdn/shop/files/C1_05_1920X900_SEASON_S_TRENDS.jpg?v=1725004539",
];

let currentIndex1 = 0;
const sliderImage1 = document.getElementById("sliderImage1");

function showSlide1(index) {
  currentIndex1 = (index + images1.length) % images1.length;
  sliderImage1.style.opacity = 0;
  setTimeout(() => {
    sliderImage1.src = images1[currentIndex1];
    sliderImage1.style.opacity = 1;
  }, 500);
}

let interval1 = setInterval(() => showSlide1(currentIndex1 + 1), 2000);

function showPrevSlide() {
  clearInterval(interval1);
  showSlide1(currentIndex1 - 1);
  interval1 = setInterval(() => showSlide1(currentIndex1 + 1), 2000);
}

function showNextSlide() {
  clearInterval(interval1);
  showSlide1(currentIndex1 + 1);
  interval1 = setInterval(() => showSlide1(currentIndex1 + 1), 2000);
}

sliderImage1.src = images1[currentIndex1];

// Similar changes for other sliders

// Slider 2
const images2 = [
  "https://www.westside.com/cdn/shop/files/C2_01_1920X900_SHOP-MEN.gif?v=1725006598",
  "https://www.westside.com/cdn/shop/files/C2_02_1920X900_SHOP_MAN.jpg?v=1725006699",
  "https://www.westside.com/cdn/shop/files/C2_03_1920X900_SEASON_S_TRENDS.jpg?v=1725006875",
  "https://www.westside.com/cdn/shop/files/C2_04_1920X900_SEASON_S_TRENDS.jpg?v=1725006898",
  "https://www.westside.com/cdn/shop/files/C2_05_1920X900_SHIRT_SHOP.jpg?v=1725006934",
  "https://www.westside.com/cdn/shop/files/C2_06_1920X900_SHOP_FORMALS.jpg?v=1725007017",
  "https://www.westside.com/cdn/shop/files/C2_07_1920X900_CASUAL_BOTTOMS.jpg?v=1725007112",
  "https://www.westside.com/cdn/shop/files/C2_11_1920X900_FOOTWEAR.png?v=1725007226"
];

let currentIndex2 = 0;
const sliderImage2 = document.getElementById("sliderImage2");

function showSlide2(index) {
  currentIndex2 = (index + images2.length) % images2.length;
  sliderImage2.style.opacity = 0;
  setTimeout(() => {
    sliderImage2.src = images2[currentIndex2];
    sliderImage2.style.opacity = 1;
  }, 500);
}

let interval2 = setInterval(() => showSlide2(currentIndex2 + 1), 2000);

function showPrevSlide2() {
  clearInterval(interval2);
  showSlide2(currentIndex2 - 1);
  interval2 = setInterval(() => showSlide2(currentIndex2 + 1), 2000);
}

function showNextSlide2() {
  clearInterval(interval2);
  showSlide2(currentIndex2 + 1);
  interval2 = setInterval(() => showSlide2(currentIndex2 + 1), 2000);
}

sliderImage2.src = images2[currentIndex2];
// Slider 3
const images3 =["https://www.westside.com/cdn/shop/files/C3_10_1920X900_BOY_S_SHOP.jpg?v=1725012168",
    "https://www.westside.com/cdn/shop/files/C3_02_1920X900_ETHNIC_SUITS.jpg?v=1725011808",
     "	https://www.westside.com/cdn/shop/files/C3_05_1920X900_KURTIS_TUNICS.jpg?v=1725011918",
  "	https://www.westside.com/cdn/shop/files/C3_08_1920X900_BOHO_TRENDS.jpg?v=1725012045",
   "https://www.westside.com/cdn/shop/files/C3_01_1920X900_SHOP_ETHNICS.jpg?v=1725011770",
  "https://www.westside.com/cdn/shop/files/C3_04_1920X900_BOHO_TRENDS.jpg?v=1725011885",
 "	https://www.westside.com/cdn/shop/files/C3_07_1920X900_ETHNIC_BOTTOMS.jpg?v=1725250629",
   "	https://www.westside.com/cdn/shop/files/C3_11_1920X900_FOOTWEAR.jpg?v=1725012103",
   "https://www.westside.com/cdn/shop/files/C3_09_1920X900_ETHNIC_DRESSES.jpg?v=1725012072",
"	https://www.westside.com/cdn/shop/files/C3_04_1920X900_SEASON_S_TRENDS.jpg?v=1725011964",
"	https://www.westside.com/cdn/shop/files/C3_03_380X676_COORD_SETS.jpg?v=1725012759"
];
let currentIndex3 = 0;
   const sliderImage3 = document.getElementById("sliderImage3");
   let interval3 = setInterval(showNextSlide3, 2000);
   
   function showSlide3(index) {
     currentIndex3 = (index + images3.length) % images3.length;
     sliderImage3.style.opacity = 0;
     setTimeout(() => {
       sliderImage3.src = images3[currentIndex3];
       sliderImage3.style.opacity = 1;
     }, 500);
   }
   
   function showPrevSlide3() {
     showSlide3(currentIndex3 - 1);
     clearInterval(interval3);
     interval3 = setInterval(showNextSlide3, 2000);
   }
   
   function showNextSlide3() {
     showSlide3(currentIndex3 + 1);
     clearInterval(interval3);
     interval3 = setInterval(showNextSlide3, 2000);
   }
   
   sliderImage3.src = images3[currentIndex3];


// Slider 4
const images4 = ["	https://www.westside.com/cdn/shop/files/C4_02_1920X900_FRAGRANCE.jpg?v=1725003829",
    "https://www.westside.com/cdn/shop/files/C4_01_1920X900_BATH_BODY.jpg?v=1725003853",
"	https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_BEAUTY.jpg?v=1725003873"
];
let currentIndex4 = 0;
   const sliderImage4 = document.getElementById("sliderImage4");
   let interval4 = setInterval(showNextSlide4, 2000);
   
   function showSlide4(index) {
     currentIndex4 = (index + images4.length) % images4.length;
     sliderImage4.style.opacity = 0;
     setTimeout(() => {
       sliderImage4.src = images4[currentIndex4];
       sliderImage4.style.opacity = 1;
     }, 500);
   }
   
   function showPrevSlide4() {
     showSlide4(currentIndex4 - 1);
     clearInterval(interval4);
     interval4 = setInterval(showNextSlide4, 2000);
   }
   
   function showNextSlide4() {
     showSlide4(currentIndex4 + 1);
     clearInterval(interval4);
     interval4 = setInterval(showNextSlide4, 2000);
   }
   

sliderImage4.src = images4[currentIndex4];

const images5 = ["https://www.westside.com/cdn/shop/files/C5_01_1920X900_SHOP_BED.jpg?v=1725003143",
"https://www.westside.com/cdn/shop/files/C5_02_1920X900_SHOP_KITCHEN.jpg?v=1725003376",
"https://www.westside.com/cdn/shop/files/C5_03_1920X900_SHOP_LIVING.jpg?v=1725003395",
"https://www.westside.com/cdn/shop/files/C5_04_1920X900_SHOPBATH.jpg?v=1725003416"];
let currentIndex5 = 0;
   const sliderImage5 = document.getElementById("sliderImage5");
   let interval5 = setInterval(showNextSlide5, 2000);
   
   function showSlide5(index) {
     currentIndex5 = (index + images5.length) % images5.length;
     sliderImage5.style.opacity = 0;
     setTimeout(() => {
       sliderImage5.src = images5[currentIndex5];
       sliderImage5.style.opacity = 1;
     }, 500);
   }
   
   function showPrevSlide5() {
     showSlide5(currentIndex5 - 1);
     clearInterval(interval5);
     interval5 = setInterval(showNextSlide5, 2000);
   }
   
   function showNextSlide5() {
     showSlide5(currentIndex5 + 1);
     clearInterval(interval5);
     interval5 = setInterval(showNextSlide5, 2000);
   }
sliderImage5.src = images5[currentIndex5];


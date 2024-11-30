window.onload = function() {

    const fadeInElement = document.querySelector('.scrl');
    fadeInElement.classList.add('visible'); // Trigger the fade-in transition
    const hdr=document.querySelector('header');
    hdr.classList.add('visible')
    const vtb=document.querySelector('.vtb');
    vtb.classList.add('visible')
    const lftslde=document.querySelector('.lftslde');
    lftslde.classList.add('visible')
    const rightsld = document.querySelector(".rightsld");
    rightsld.classList.add('visible')
  };



const slides1 = document.querySelectorAll(".slide1")
var cnt1=0;
slides1.forEach((slide,index) => {
    slide.style.left=`${index*100}%`
});
const gonext1=()=>{
    if(cnt1 == 4){
        return 
    }
    cnt1++
    slideImage1()
}
const goback1=()=>{
    cnt1--
    slideImage1()
}
const slideImage1= () => {
    slides1.forEach((slide) => {
        slide.style.transform = `translateX(-${cnt1*100}%)`
    })
}

const slides2 = document.querySelectorAll(".slide2")
var cnt2=0;
slides2.forEach((slide,index) => {
    slide.style.left=`${index*100}%`
});
const gonext2=()=>{
    if(cnt2 == 5){
        return 
    }
    cnt2++
    slideImage2()
}
const goback2=()=>{
    cnt2--
    slideImage2()
}
const slideImage2= () => {
    slides2.forEach((slide) => {
        slide.style.transform = `translateX(-${cnt2*100}%)`
    })
}

const slides3 = document.querySelectorAll(".slide3")
var cnt3=0;
slides3.forEach((slide,index) => {
    slide.style.left=`${index*100}%`
});
const gonext3=()=>{
    if(cnt3 == 9){
        return 
    }
    cnt3++
    slideImage3()
}
const goback3=()=>{
    cnt3--
    slideImage3()
}
const slideImage3= () => {
    slides3.forEach((slide) => {
        slide.style.transform = `translateX(-${cnt3*100}%)`
    })
}

const slides4 = document.querySelectorAll(".slide4")
var cnt4=0;
slides4.forEach((slide,index) => {
    slide.style.left=`${index*100}%`
});
const gonext4=()=>{
    if(cnt4 == 5){
        return 
    }
    cnt4++
    slideImage4()
}
const goback4=()=>{
    cnt4--
    slideImage4()
}
const slideImage4= () => {
    slides4.forEach((slide) => {
        slide.style.transform = `translateX(-${cnt4*100}%)`
    })
}


const slides5 = document.querySelectorAll(".slide5")
var cnt5=0;
slides5.forEach((slide,index) => {
    slide.style.left=`${index*100}%`
});
const gonext5=()=>{
    if(cnt5 == 5){
        return 
    }
    cnt5++
    slideImage5()
}
const goback5=()=>{
    cnt5--
    slideImage5()
}
const slideImage5= () => {
    slides5.forEach((slide) => {
        slide.style.transform = `translateX(-${cnt5*100}%)`
    })
}

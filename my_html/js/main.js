// RANDOM COLOR GENERATOR
const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)


//Scroll Parallax
//
// document.addEventListener("scroll", () => {
//     window.addEventListener('scroll', ev => {
//         document.body.cssText += `--scrollTop: ${this.scrollY}px`
//     })
//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
//     ScrollSmoother.create({
//         wrapper: '.wrapper',
//         content: '.content',
//     });
// // });
// let listBg = Array.from(document.querySelectorAll('.bg .bg-block'));
// let listTitle = Array.from(document.querySelectorAll('.main_block'));
//
// window.addEventListener('scroll', (e) =>{
//     listBg.forEach((bg, index) => {
//         if (index !== 0 && index !== 8) {
//             bg.style.transform = `translateY(${(top * index / 2)}px)`;
//         } else if (index === 0) {
//             bg.style.transform = `translateY(${(top / 3)}px)`;
//         }
//     });
//
// })

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
})
let itemsSliders = gsap.utils.toArray('.inner_slider .slide')
itemsSliders.forEach(item => {
    gsap.fromTo(item, {x: -80, opacity: 0}, {
        opacity:1,x:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '-100',
            scrub:true,
        }
    })
})
let itemsSlidersBorder = gsap.utils.toArray('.slider .btn-slide')
itemsSlidersBorder.forEach(item => {
    gsap.fromTo(item, {x: 80, opacity: 0}, {
        opacity:1,x:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '-100',
            scrub:true,
        }
    })
})

let videoBlock = gsap.utils.toArray('.block_video')
videoBlock.forEach(item =>{
    gsap.fromTo(item, {x:-100, opacity:0},{
        opacity:1, x:0,
        scrollTrigger:{
            trigger:item,
            start: '-900',
            end: '-100',
            scrub:true
        }

    })
})

gsap.from('.main_block', 1.2,{opacity:0,y:130,delay:0.8})
gsap.from('.bg-6', 1.2,{opacity:0,y:100,delay:0.5})
gsap.from('.bg-7', 1.2,{opacity:0,y:100,delay:0.5})
gsap.from('.bg-8', 1.2,{opacity:0,x:-130,delay:0.5})
gsap.from('.bg-9', 1.2,{opacity:0,y:150,delay:0.5})


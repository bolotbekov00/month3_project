// Hw1-p1

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[/^[a-zA-Z0-9._%+-]+@gmail\.com|@yandex.ru|info.cern.ch|mailfence.com$/

gmailButton.addEventListener('click', () =>{
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'Проверка прошла успешна'
        gmailResult.style.color = "green"
    }
    else {
        gmailResult.innerHTML = 'Введите нормально, пожалуйста'
        gmailResult.style.color = "red"
    }
})
// Hw1-p2
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const moveChildBlock = () => {
    if (positionX < 449 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 449 && positionY < 449) {
        positionY++
        childBlock.style.top = `${positionY}px`;
    } else if (positionX > 0 && positionY === 449) {
        positionX--
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`;
    }

    setTimeout(moveChildBlock, 10);
}
moveChildBlock()

//HW-2

const minutesBlock = document.querySelector('#minutesS')
const secondsBlock = document.querySelector('#secondsS')
const mlSecondsBlock = document.querySelector('#ml-secondsS')
const btnStart = document.querySelector('#start')
const btnStop = document.querySelector('#stop')
const btnReset = document.querySelector('#reset')

let interval;
let seconds = 0
let minutes = 0
let mlSeconds = 0

const startTimer = () => {
    mlSeconds++
    mlSecondsBlock.innerHTML = mlSeconds
    if (mlSeconds > 99){
        seconds++
        secondsBlock.innerHTML = '0' + seconds
        mlSeconds = 0
    }
    if (seconds > 9){
        secondsBlock.innerHTML = seconds
    }
    if(seconds > 59){
        minutes++
        minutesBlock.innerHTML = '0' + minutes
        seconds = 0
        secondsBlock.innerHTML = '0' + seconds
    }
    if (minutes > 9){
        minutesBlock.innerHTML = minutes
    }

}
btnStart.addEventListener('click', () => {
    interval = setInterval(startTimer,10)
})
btnStop.addEventListener('click', () => {
    clearInterval(interval)
})
btnReset.addEventListener('click', () => {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    mlSeconds = 0
    minutesBlock.innerHTML = '00'
    secondsBlock.innerHTML = '00'
    mlSecondsBlock.innerHTML = '00'

})
window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

// let tl = gsap.timeline()
//
// tl.to('.title-hw', {
//     x:800
// })


//
// const tt = new Lenis()
// tt.on('scroll', (e) => {
//     console.log(e)
// })

//scroll parallax

gsap.from('.title-hw',1.2,{opacity:0,x:100, delay:0.8})
gsap.from('#leftCloud',1.2,{opacity:0,x:-200, delay:0.8})
gsap.from('#rightCloud',1.2,{opacity:0,x:200, delay:0.8})
gsap.from('#mainCloud',1.2,{opacity:0,y:-200, delay:0.8})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
})
let titleGsap = gsap.utils.toArray('h3')
titleGsap.forEach(item => {
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

let btnGmailGsap = gsap.utils.toArray('.btn-block')

btnGmailGsap.forEach(item => {
    gsap.fromTo(item, {x:100, opacity: 0}, {
        opacity:1,x:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '-100',
            scrub:true,
        }
    })
})
let inputGmailGsap = gsap.utils.toArray('.input-hw')

inputGmailGsap.forEach(item => {
    gsap.fromTo(item, {y:80, opacity: 0}, {
        opacity:1,y:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '-100',
            scrub:true,
        }
    })
})

let childMoveGsap = gsap.utils.toArray('.child_block')
childMoveGsap.forEach(item => {
    gsap.fromTo(item, {y:80, opacity: 0}, {
        opacity:1,y:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '-100',
            scrub:true,
        }
    })
})

let timeGsapBlock = gsap.utils.toArray('.time')
timeGsapBlock.forEach(item => {
    gsap.fromTo(item, {y:80, opacity: 0}, {
        opacity:1,y:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '-100',
            scrub:true,
        }
    })
})
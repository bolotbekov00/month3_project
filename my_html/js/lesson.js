// phone

const phoneInput = document.querySelector('#phone_input')
const phoneResult = document.querySelector('#phone_result')
const phoneButton = document.querySelector('#phone_button')


const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () =>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = "green"
    }
    else {
        phoneResult.innerHTML = 'not ok'
        phoneResult.style.color = "red"
    }
})


// Tab slider
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabSParent = document.querySelector('.tab_content_items')

let currentTabIndex = 0
let intervalId

const hideTabContent = () => {
    tabContent.forEach(tabBlock => {
        tabBlock.style.display = 'none'
    })

    tabs.forEach(tabItem => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (indexElement = 0) => {
    tabContent[indexElement].style.display = 'block'
    tabs[indexElement].classList.add('tab_content_item_active')
}

const autoSlide = () => {
    hideTabContent()
    currentTabIndex = (currentTabIndex + 1) % tabs.length
    showTabContent(currentTabIndex)
}

hideTabContent()
showTabContent(0)

tabSParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tabItems, tabIndex) => {
            if (event.target === tabItems) {
                hideTabContent()
                currentTabIndex = tabIndex
                showTabContent(tabIndex)
            }
        })
    }
}
const intervalDuration = 3000
intervalId = setInterval(autoSlide, intervalDuration)

//converter

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')
const rubInput = document.querySelector('#ruble')

const convertorChanges =  (elementValue,targetElementUsd, targetElementEur,targetElementRub,itsTrue) => {
    elementValue.oninput = async () => {
        try{
            const response = await fetch('../data/convertor.json')
            const data = await response.json()

            const convertFun  =  (data) => {
                if (itsTrue === "som"){
                    targetElementUsd.value = (elementValue.value / data.usd).toFixed(2)
                    targetElementEur.value = (elementValue.value / data.eur).toFixed(2)
                    targetElementRub.value = (elementValue.value / data.rub).toFixed(2)
                }else if (itsTrue === 'usd'){
                    targetElementUsd.value = (elementValue.value * data.usd).toFixed(2)
                    targetElementEur.value = (elementValue.value * (data.usd / data.eur)).toFixed(2)
                    targetElementRub.value = (elementValue.value * (data.usd / data.rub)).toFixed(2)
                }else if(itsTrue ==='eur'){
                    targetElementEur.value = (elementValue.value * data.eur).toFixed(2)
                    targetElementUsd.value = (elementValue.value * (data.eur / data.usd)).toFixed(2)
                    targetElementRub.value = (elementValue.value * (data.eur / data.rub)).toFixed(2)
                }else{
                    targetElementRub.value = (elementValue.value * data.rub).toFixed(2)
                    targetElementUsd.value = (elementValue.value * (data.rub / data.usd)).toFixed(2)
                    targetElementEur.value = (elementValue.value * (data.rub / data.eur)).toFixed(2)
                }
                if (elementValue.value === ''){
                    targetElementRub.value = ''
                    targetElementEur.value = ''
                    targetElementUsd.value = ''
                }
            }
            convertFun(data)
        }catch (e){
            console.log(`error${e}`)
        }
    }
}

convertorChanges(somInput, usdInput, eurInput,rubInput,'som')
convertorChanges(usdInput, somInput, eurInput,rubInput,'usd')
convertorChanges(eurInput,usdInput,somInput, rubInput,'eur')
convertorChanges(rubInput,usdInput,eurInput,somInput, 'rub')

//card switcher

const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
const cardBlock = document.querySelector('.card')
let id  = 1

const elementCardSwitcher = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            cardBlock.innerHTML =`
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `
        })
}
elementCardSwitcher()

btnNext.onclick = () => {
    id++
    if (id >= 201){
        id = 1
    }
    elementCardSwitcher()
}
btnPrev.onclick = () => {
    id--
    if (id < 1){
        id = 200
    }
    elementCardSwitcher()
}

//scroll

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
})

gsap.from('.header', 1.2, {opacity:1, y: -200, delay:0.7})
gsap.from('.bg-2', 1.2, {opacity:0, y:150, delay:2})
gsap.from('.bg-3', 1.2, {opacity:0, y:150, delay:1.5})
gsap.from('.bg-4', 1.2, {opacity:0, x:300, delay:1.5})
gsap.from('.bg-5', 1.2, {opacity:0, y:150, delay:.9})
gsap.from('.bg-6', 1.2, {opacity:0, y:150, delay:.7})
gsap.from('.bg-7', 1.2, {opacity:0, y:150, delay:.6})
gsap.from('.bg-8', 1.2, {opacity:0, y:150, delay:.5})
gsap.from('.bg-9', 1.2, {opacity:0, y:150, delay:.3})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
})

let titleLessonGsap  = gsap.utils.toArray('h3')
titleLessonGsap.forEach(item => {
    gsap.fromTo(item, {y: -100, opacity: 0}, {
        opacity:1,x:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '-100',
            scrub:true,
        }
    })
})
let gsapPhoneBlock  = gsap.utils.toArray('.inner_phone_block')
gsapPhoneBlock.forEach(item => {
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
let gsapTabBlock  = gsap.utils.toArray('.tab_content_block')
gsapTabBlock.forEach(item => {
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
let gsapTabBtnBlock  = gsap.utils.toArray('.tab_content_items')
gsapTabBtnBlock.forEach(item => {
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
let somGsap  = gsap.utils.toArray('#som')
somGsap.forEach(item => {
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
let eurGsap  = gsap.utils.toArray('#eur')
eurGsap.forEach(item => {
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
let RubGsap  = gsap.utils.toArray('#ruble')
RubGsap.forEach(item => {
    gsap.fromTo(item, {x: -100, opacity: 0}, {
        opacity:1,x:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '-100',
            scrub:true,
        }
    })
})
let UsdGsap  = gsap.utils.toArray('#usd')
UsdGsap.forEach(item => {
    gsap.fromTo(item, {x: -100, opacity: 0}, {
        opacity:1,x:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '-100',
            scrub:true,
        }
    })
})

let labelGsap  = gsap.utils.toArray('label')
labelGsap.forEach(item => {
    gsap.fromTo(item, {y: -100, opacity: 0}, {
        opacity:1,y:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '0',
            scrub:true,
        }
    })
})

let weatherGsap  = gsap.utils.toArray('.inner_weather')
weatherGsap.forEach(item => {
    gsap.fromTo(item, {y: -100, opacity: 0}, {
        opacity:1,y:0,
        scrollTrigger:{
            trigger:item,
            start: '-800',
            end: '0',
            scrub:true,
        }
    })
})




//weather

const cityNameInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

const citySearch = () => {
    cityNameInput.oninput = async (event) => {
        try{
            const response = await fetch(`${BASE_URL}?q=${event.target.value}&appid=${API_KEY}`)
            const data =await response.json()
            console.log(data)
            city.innerHTML = data?.name ? data?.name : 'город не найден...'
            temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + "&deg;C" : '...'
        }catch (e){
            console.log(e.message, 'error')
        }
    }
}

citySearch()



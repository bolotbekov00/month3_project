const JSON_URL = 'https://jsonplaceholder.typicode.com'
const JSON_CARD = '/posts'

const fetchCard = async () => {

    const cards = document.querySelector('.card-block')
    try{
        const response = await fetch(`${JSON_URL}${JSON_CARD}?_limit=25`)
        const data = await response.json()
        const dataAppend = await data.forEach((data) => {
            for (let i = 1; i <= 25; i++) {
                const cardBlock = document.querySelector('.card-block')
                const cardDiv = document.createElement('div');
                cardDiv.setAttribute('class', 'card');
                cardDiv.setAttribute('id', `card-${i.toString()}`);
                cardBlock.appendChild(cardDiv);
                cardDiv.innerHTML = `
                    <h4 style="font-size: 14px;">${data.title}</h4>
                    <img class="img-card-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXI02FB3-GZ5NMjqh3U9_Yj10CymgyKC7Nng&usqp=CAU" alt="aaa">
                    <span style="color: #f0f0f0">${data.body}</span>
                `
            }
            cards.append(dataAppend)
        })
    }catch (e){
        console.log(e + 'error')
    }
}
fetchCard()


gsap.from('.header', 1.2,{opacity:0, y:-80,delay:1.2})
gsap.from('.parallax__layer__6', 1.2,{opacity:0, y:80,delay:1})
gsap.from('.parallax__layer__5', 1.2,{opacity:0, y:90,delay:1.2})
gsap.from('.parallax__layer__4', 1.2,{opacity:0, y:100,delay:1.3})
gsap.from('.parallax__layer__3', 1.2,{opacity:0, y:120,delay:1.4})
gsap.from('.parallax__layer__2', 1.2,{opacity:0, y:140,delay:1.5})
gsap.from('.parallax__layer__1', 1.2,{opacity:0, y:160,delay:1.6})
gsap.from('.parallax__layer__0', 1.2,{opacity:0, x:160,delay:1.6})

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')
let isModal = false

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    isModal = true
}

const closeModal = () => {
    document.body.style.overflow = ''
    modal.style.display = 'none'
}

setTimeout(() => {
    if (!isModal) {
        openModal()
    }
},10000)
modalTrigger.onclick = () => openModal()
modal.onclick = (event) => {
    if (event.target === modal || event.target === modalCloseBtn) {
        closeModal()
    }

}
const checkScroll = () => {
    window.addEventListener('scroll', () => {
        if (!isModal) {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
                openModal()
            } else {
                closeModal()
            }
        }
    })
}
checkScroll()


//post data
const formElement = document.querySelector('form')

const postData = (url, data) => {
    try{
        const response = fetch(url, {
            method:"POST",
            headers: {'Content-type' : 'application/json'},
            body:data
        })
    }catch (e){
        console.log(`error${e}`)
    }
}

const bindPostData = (from) => {
    try{
        from.onsubmit = (event) => {
            event.preventDefault()
            const fromData = new FormData()
            const usersObj = {}
            fromData.forEach((item, index,) => {
                usersObj[index] = item
            })
            const userJson = JSON.stringify(usersObj)
            if (window.location.pathname === '/project_program_for_students/index.html'){
                postData('server.php',userJson)
            }else{
                postData('../server.php', userJson)
            }
        }
    }catch (e){
        console.log(`error${e}`)
    }
}
bindPostData(formElement)

// const postData = (form) => {
//     form.addEventListener('submit', (event) => {
//         event.preventDefault()
//
//         const request = new XMLHttpRequest()
//         request.open('POST',"server.php")
//         request.setRequestHeader('Content-type','application/json')
//
//         const formData = new FormData(form)
//         const usersObj = {}
//         formData.forEach((item, index) => {
//             usersObj[index] = item
//         })
//         const jsonUsers = JSON.stringify(usersObj)
//         request.send(jsonUsers)
//     })
// }
//
// postData(formElement)


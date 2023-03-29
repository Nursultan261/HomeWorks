const tabParent = document.querySelector('.tabheader__items')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsContant = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabsContant.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabsContant [i].style.display = "block"
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabParent.addEventListener("click", (e) => {
  const target = e.target

    if (target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if (target === item){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})




let tabcounter = 0
const autoSlider = ()=> {
    if (tabcounter === 4) tabcounter = 0
    hideTabContent()
    showTabContent(tabcounter)
    tabcounter++
}
let slider =setInterval(autoSlider, 1000 )

tabParent.addEventListener('click', (e) => {
    clearInterval(slider)
    setTimeout(() => {
        slider = setInterval(autoSlider, 1000)
    }, 5000)
    if (e.target.classList.contains('tabheader__item')){
        const target = e.target
        tabs.forEach((item, i) => {
            if (target === item){
                hideTabContent()
                showTabContent(i)
                tabcounter = i
            }
        })
    }
})



const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector(".btn_white")
const openModalDark = document.querySelector(".btn_dark")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}
openModalBtn.addEventListener("click", openModal)
openModalDark.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
closeModalBtn.addEventListener("click", closeModal)


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const scrollHeight = document.body.scrollHeight
    if (scrollPosition >= scrollHeight) {
        openModal()
    }
})

closeModalBtn.onclick = () => closeModal()

modal.onclick = (event) => (event.target === modal ? closeModal() : false)


const message = {
    loading: "Loading...",
    success: "Thanks, we'll be in touch soon!",
    fail: "Something went wrong..."
}

const diolog = document.querySelector('.modal__dialog')
modal.addEventListener('click', (e) =>
{
    if (!diolog.contains(e.target) && modal.classList.contains('show')) closeModal();
})

const forms = document.querySelectorAll('form')
const postData = (form) => {
    form.addEventListener("submit", (e) => {

        e.preventDefault()

        const messageBlock = document.createElement('div')
        messageBlock.setAttribute('class', 'messageBlock')
        messageBlock.textContent = message.loading
        diolog.append(messageBlock)

        const request = new XMLHttpRequest()
        request.open("POST", "server.php")
        request.setRequestHeader("Content-type", "date/json")

        const formData = new FormData(form)
        const object = {}

        formData.forEach((item, i) =>
        {
            const arr = [item, i]
            console.log(arr);
            object[i] = item
        })
        console.log(object);
        const json = JSON.stringify(object)
        request.send(json)

        const closeMessage = function () {
            setTimeout(() => {
                messageBlock.remove()
            }, 4000);
        }
        request.addEventListener("load",  () => {
            setTimeout(() => {
                messageBlock.textContent = message.loading
                if (request.status === 200) {
                    console.log('ok')
                    messageBlock.textContent = message.success
                    messageBlock.style.background = 'rgb(197,5,236)'
                    messageBlock.style.color = 'rgb(238,241,237)'
                    closeMessage()
                    setTimeout(() => {
                        closeModal()
                    }, 5000);
                    document.getElementById('input1').value = ''
                    document.getElementById('input2').value = ''
                }
                else {
                    console.log("not ok")
                    messageBlock.textContent = message.fail
                    messageBlock.style.background = 'red'
                    closeMessage()
                }
            }, 1500);
        })

    })

}
forms.forEach((item) => {
    postData(item)
})

const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")


const convert = (element, target, target2) => {
    element.addEventListener("input", () => {
        const request = new XMLHttpRequest()


        request.open("GET", "data.json")
        request.setRequestHeader("Content-Type", "application/jason")
        request.send()



        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)

            target.forEach(event => {
                target2 === 'som' ?
                    event.value = (element.value / data [event.id]).toFixed(2) : event === som?
                        event.value = (element.value * data[element.id]).toFixed(2)
                        :event.value = ((element.value * data[element.id]) / data[event.id]).toFixed(2)
            })
            element.value === '' && (target.forEach(event => event.value = ''))
        })
    })
}
convert(som, [eur,usd,som])
convert(eur, [som,usd,eur])
convert(usd, [eur,som,usd])

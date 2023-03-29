const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert =(elem, target, isTrue) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET","data.json")
        request.setRequestHeader("Content-Type","application/json")
        request.send()
        request.addEventListener("load", () => {
            const data =JSON.parse(request.response)
            if (elem === som) {
                target.value = (elem.value / data.eur).toFixed(2)
                isTrue.value = (elem.value / data.usd).toFixed(2)
            }else if (elem === usd) {
                target.value = (elem.value * data.usd).toFixed(2)
                isTrue.value = (elem.value * data.usd / data.eur).toFixed(2)
            }else if (elem === eur) {
                target.value = (elem.value * data.eur).toFixed(2)
                isTrue.value = (elem.value * data.eur  / data.usd).toFixed(2)
            }
            elem.value === '' ? (target.value = '') : null
            elem.value === '' ? (isTrue.value = '') : null
        })
    })
}

convert (som, usd, eur, 42)
convert (usd, som, eur, '')
convert(eur, som, usd, "" )
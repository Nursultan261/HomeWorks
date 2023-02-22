const input = document.getElementById('inputString')
const button = document.getElementsByClassName('send-button')
const to = document.getElementsByClassName('chat-input')

const create = () => {
    const div = document.createElement('div')
    const text = document.createElement('h3')

    div.setAttribute('class', 'i1')

    text.innerHTML = input.value

    div.append(textContent)
    todo_list.append(div)
}

send-button.addEventListener('onclic', create)
function reverseString() {
    const inputString = document.getElementById("inputString").value;
    
    const stringArray = inputString.split("");
    
    const reversedArray = stringArray.reverse();
    
    const reversedString = reversedArray.join("");
    
    document.getElementById("outputString").textContent = reversedString;
  }

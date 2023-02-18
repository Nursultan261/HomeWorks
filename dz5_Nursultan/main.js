
const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const buttonsDiv = document.createElement('div')
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        buttonsDiv.setAttribute('class','buttons_div')
        editButton.setAttribute('class', 'edit_button')
        deleteButton.setAttribute('class','delete_button')

        deleteButton.innerHTML = 'DELETE'
        editButton.innerHTML = 'EDIT'

        text.innerText = input.value

        buttonsDiv.append(deleteButton, editButton)
        div.append(text, buttonsDiv)
        todoList.prepend(div)
        deleteButton.onclick = () => div.remove()
        editButton.onclick = () => {
            const editedText = prompt('EDIT')
            text.innerText = editedText
        }
    }
    input.value = ''
}

createButton.onclick = () => createTodo()
input.addEventListener('keydown', e => (e.keyCode === 13) ? createTodo() : false)
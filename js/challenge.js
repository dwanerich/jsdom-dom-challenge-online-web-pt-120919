const state = {
    count: 0,
    paused: false,
    likes: {1: 10, 2: 20, 3: 30, 4: 40}
}

let counter = document.getElementById('counter');
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const pause = document.getElementById('pause')
const heart = document.getElementById('heart')
const submit = document.getElementById('submit')
const form = document.getElementById('comment-form')
const list = document.getElementById('list')
const likeList = document.querySelector('.likes')

setInterval(() => count(1), 1000);

function count(num) {
    if (!state.paused) {
    state.count += num
    counter.innerHTML = state.count;
    }
}

function pauser() {
    state.paused = !state.paused
    // Array.from will make the code below work regardless
    document.querySelectorAll('button').forEach(button => {
        if (button.id !== 'pause') {
            button.disabled = !button.disabled
        }
        pause.innerText = state.paused ? 'resume' : 'pause'
    })
}

function addComment(e) {
    e.preventDefault()
    let render = document.createElement('h1')
    list.innerHTML += form.comment.value
    list.appendChild(render)
    form.reset()
}

function renderLikes() {
likeList.innerHTML = ""
Object.entries(state.likes).forEach(likeArray => {
    const second = likeArray[0]
    const likes = likeArray[1]
    renderLike(second, likes)
})
}

function renderLike(second, like) {
const li = document.createElement('li')
li.innerHTML = `${second} has been liked ${like} times.`
likeList.appendChild(li)
}

function like() {

    console.log('i am the like function')
}

heart.addEventListener('click', renderLike)


plus.addEventListener('click', () => count(1))
minus.addEventListener('click', () => count(-1))
pause.addEventListener("click", pauser)
form.addEventListener('submit', (addComment))


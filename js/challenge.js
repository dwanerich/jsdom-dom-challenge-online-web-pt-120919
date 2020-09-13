const state = {
    count: 0,
    paused: false,
    likes: {}
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
    counter.innerHTML = state.count
    }
}

function pauser() {
    state.paused = !state.paused
    // Array.from will make the code below work regardless
    document.querySelectorAll('button').forEach(button => {
        if (button.id !== 'pause') {
            button.disabled = !button.disabled
        }
    })
    pause.innerText = state.paused ? 'resume' : 'pause'
}

function addComment(e) {
    e.preventDefault()
    const comment = document.createElement('h1')
    let input = form.comment.value
    comment.innerText = input
    list.appendChild(comment)
    form.reset()
}

const buttonFucntions = {
'plus': () => count(1),
    "minus": () => count(-1),
    "pause": pauser,
    "heart": like

}



function like(){
    (state.likes[state.count]) ? state.likes[state.count] ++ : state.likes[state.count] = 1
    renderLikes()
}

function renderLikes() {
likeList.innerHTML = ""
Object.entries(state.likes).forEach(likeArray => {
    const second = likeArray[0]
    const likes = likeArray[1]
    renderLike(second, likes)
})
}

function renderLike(second, likes) {
const li = document.createElement('li')
li.innerHTML = `${second} has been liked ${likes} time${state.likes[second] === 1 ? "" : "s"}.`
likeList.appendChild(li)
}

heart.addEventListener('click', renderLike)


plus.addEventListener('click', () => count(1))
minus.addEventListener('click', () => count(-1))
pause.addEventListener("click", pauser)
form.addEventListener('submit', (addComment))


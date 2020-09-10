const state = {
    count: 0,
    paused: false
}

let counter = document.getElementById('counter');
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const pause = document.getElementById('pause')
const heart = document.getElementById('heart')
const submit = document.getElementById('submit')
const form = document.getElementById('comment-form')
const list = document.getElementById('list')

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

heart.addEventListener("click", () => {
    console.log('heart has been clicked')
});

plus.addEventListener('click', () => count(1))
minus.addEventListener('click', () => count(-1))
pause.addEventListener("click", pauser)
form.addEventListener('submit', (addComment))

function addComment(e) {
    e.preventDefault()
    let render = document.createElement('h1')
    list.innerHTML += form.comment.value
    list.appendChild(render)
}
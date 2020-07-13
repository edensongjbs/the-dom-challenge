document.addEventListener("DOMContentLoaded", () => {
    let timerVal = 0
    let paused = false

    const likesList = document.querySelector('ul.likes')
    const likeButton = document.querySelector('button#\\<3')

    likeButton.addEventListener('click', () => {
        if (paused) {return}
        if (likesList.querySelector(`#num${timerVal}`)) {
            const li = likesList.querySelector(`#num${timerVal}`)
            const numLikes = parseInt(li.children[1].innerText)+1
            li.innerHTML = `<span>${timerVal}</span> has been liked <span>${numLikes}</span> times`
        }
        else {
            const li = document.createElement('li')
            li.id = `num${timerVal}`
            li.innerHTML = `<span>${timerVal}</span> has been liked <span>1</span> time`
            likesList.append(li)
        }
    })
    
    const commentsArea = document.querySelector('div#list')
    const commentsList = document.createElement('ul')
    commentsArea.append(commentsList)
    
    const commentsForm = document.querySelector('form#comment-form')
    commentsForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const li = document.createElement('li')
        li.innerText = e.target[0].value
        commentsList.append(li)
        e.target.reset()
    })

    const counter = document.querySelector('h1#counter')
    function incrementTimer() {
        if (paused) {return}
        counter.innerText = ++timerVal
    }
    function decrementTimer() {
        if (paused) {return}
        counter.innerText = --timerVal
    }
    setInterval(incrementTimer, 1000)

    const userInc = document.querySelector('button#\\+')
    userInc.addEventListener("click", incrementTimer)
    
    const userDec = document.querySelector('button#\\-')
    userDec.addEventListener("click", decrementTimer)

    const pauseButton = document.querySelector('button#pause')
    pauseButton.addEventListener("click", (e) => {
        paused = !paused
        if (paused) {
            likeButton.setAttribute("disabled", paused)
            userInc.setAttribute("disabled", paused)
            userDec.setAttribute("disabled", paused)
            commentsForm[1].setAttribute("disabled", paused)

        }
        else {
            likeButton.removeAttribute("disabled")
            userInc.removeAttribute("disabled")
            userDec.removeAttribute("disabled")
            commentsForm[1].removeAttribute("disabled")

        }
        e.target.innerText = paused ? "resume" : "pause"
    })




})
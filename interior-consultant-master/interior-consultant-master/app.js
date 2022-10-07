// close()
var burger = document.querySelector('.burger')

html = document.querySelector('html')

console.log(html.clientWidth)
    // burger.classList.add('a')
    // close = false
var isOpen = false

console.log(burger)

burger.addEventListener('click', (e) => {
    if (!isOpen) {
        open()
        isOpen = !isOpen

        // e.classList.remove('fa-bars')
        // e.classList.add('fa-xmark')
    } else {
        close()
        isOpen = !isOpen
    }
})


function open() {
    burger.classList.remove('fa-bars')
    burger.classList.add('fa-xmark')
    document.querySelector('header').classList.add('active')
    document.querySelector('html').classList.add('active')
    document.querySelector('body').classList.add('active')

}

var close = () => {
    console.log(burger)
    burger.classList.remove('fa-xmark')
    burger.classList.add('fa-bars')
    document.querySelector('header').classList.remove('active')
    document.querySelector('html').classList.remove('active')
    document.querySelector('body').classList.remove('active')

}
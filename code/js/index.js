const menu = document.querySelector('#menu')
const hamburguermenu = document.querySelector('#hamburguer-menu')

hamburguermenu.addEventListener('click', (e) => {

    if(menu.classList.contains('closed')) {
        menu.classList.toggle('closed')
        menu.style.top = `${e.clientY + 20}px`
    } else {
        console.log('got in')
        menu.classList.toggle('closed')
    }

  
})

// function CloseMenu() {
//     if(!menu.classList.contains('closed')) {
//         menu.classList.add('closed')
//     }
// }

// document.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log(e)
// })

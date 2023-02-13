function createMenu(){

    const menu = document.createElement('div')
    menu.classList.add('memu')
    menu.innerText = 'Test for menu'
    const main = document.querySelector('.main')
    main.textContent = ''
    main.appendChild(menu)
}
export default createMenu
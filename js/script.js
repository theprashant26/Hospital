const links = document.querySelectorAll('.main-head-speacial a')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        e.preventDefault()
    })
}


function func1() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.profile-1').style.display = 'block'
}
function func2() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.profile-2').style.display = 'block'
}
function func3() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.profile-3').style.display = 'block'

}
function func4() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.profile-4').style.display = 'block'

}
function func5() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.profile-5').style.display = 'block'

}
function func6() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.profile-6').style.display = 'block'

}
function func7() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.profile-7').style.display = 'block'

}
function func8() {
    for (let i = 0; i < allprofiles.length; i++) {
        allprofiles[i].style.display = 'none'
    }
    document.querySelector('.profile-8').style.display = 'block'

}


const icon = document.querySelector('.icon-first')
const firstvideo = document.querySelector('.first-video')
const firstpara = document.querySelector('.para-video-click')
function runbhai1() {
    firstvideo.classList.toggle('active')
}
const secondvideo = document.querySelector('.second-video')
function runbhai2() {
    secondvideo.classList.toggle('.active')
}
const thirdvideo = document.querySelector('.third-video')
function runbhai3() {
    thirdvideo.classList.toggle('active')
}

// rendering pages 
const mylinksnav1 = document.querySelector('.home a')
const mylinksnav2 = document.querySelector('.info a')
const mylinksnav3 = document.querySelector('.gallery a')
const mylinksnav4 = document.querySelector('.contact a')
const mylinksnav5 = document.querySelector('.about a')
mylinksnav1.addEventListener('click', () => {
    window.location.href='home.html'
})
mylinksnav2.addEventListener('click', () => {
    window.location.href='info.html'
})
mylinksnav3.addEventListener('click', () => {
    window.location.href='gallery.html'
})
mylinksnav4.addEventListener('click', () => {
    window.location.href='Contact.html'
})
mylinksnav5.addEventListener('click', () => {
    window.location.href='About.html'
})

// translate

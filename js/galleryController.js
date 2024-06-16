'use strict'

var gImg = []

function renderGallery() {
  var elGallery = document.querySelector('.gallery')
  for (var i = 2; i < 18; i++) {
    gImg.push({ id: `${i}`, url: `img/${i}.jpg` })
  }
  var strHTML = ''
  gImg.forEach((img) => {
    strHTML += `<img onclick="onImgSelect('${img.url}' ,'${img.id}')" src="${img.url}" alt="Image ${img}" />`
  })

  elGallery.innerHTML = strHTML
}

function onImgSelect(url, id) {
  setImg(url, id)

  var elMemeContainer = document.querySelector('.meme-container')
  elMemeContainer.style.display = 'flex'
}

function showMyMemes() {
  var elMemeContainer = document.querySelector('.meme-container')
  var elGallery = document.querySelector('.gallery')
  var elMyMemes = document.querySelector('.my-memes')
  elMemeContainer.style.display = 'none'
  elGallery.style.display = 'none'
  elMyMemes.classList.remove('hidden')
  renderMeme()
}

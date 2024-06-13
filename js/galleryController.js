'use strict'

var gallery = []

renderGallery()
function renderGallery() {
  var elGallery = document.querySelector('.gallery')
  for (var i = 2; i < 8; i++) {
    gallery.push(`img/${i}.jpg`)
  }
  var strHTML = ''
  gallery.forEach((img) => {
    strHTML += `<img onclick="onImgSelect('${img}')" src="${img}" alt="Image ${img}" />`
  })
  elGallery.innerHTML = strHTML
}

function onImgSelect(url) {
  setImg(url)
  renderMeme()
  var elMemeContainer = document.querySelector('.meme-container')
  var elGallery = document.querySelector('.gallery')
  elMemeContainer.style.display = 'block'
  elGallery.style.display = 'none'
}

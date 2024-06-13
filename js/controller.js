'use strict'

var elCanvas = document.querySelector('.canvas')
var gCtx = elCanvas.getContext('2d')

function onInit() {
  renderMeme()
}

function renderMeme() {
  getMeme()
}

function onShowGallery() {
  var elMemeContainer = document.querySelector('.meme-container')
  var elGallery = document.querySelector('.gallery')
  elMemeContainer.style.display = 'none'
  elGallery.style.display = 'block'
}

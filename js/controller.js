'use strict'

var elCanvas = document.querySelector('.canvas')
var gCtx = elCanvas.getContext('2d')

function onInit() {
  renderGallery()
  renderMeme()
}

function renderMeme() {
  getMeme()
}

function onShowGallery() {
  var elMemeContainer = document.querySelector('.meme-container')
  var elMymemes = document.querySelector('.my-memes')
  var elGallery = document.querySelector('.gallery')
  elMemeContainer.style.display = 'none'
  elGallery.style.display = 'block'
  elMymemes.classList.add('hidden')
}

function onShowMymeme() {
  var elMemeContainer = document.querySelector('.meme-container')
  var elGallery = document.querySelector('.gallery')
  var elMymemes = document.querySelector('.my-memes')
  elMemeContainer.style.display = 'none'
  elGallery.style.display = 'none'
  elMymemes.classList.remove('hidden')
}

function onSetFillColor(color, idx) {
  getNewColor(color, idx)
}

function onIncrease(idx) {
  var size = gMeme.lines[idx].size
  size++
  gMeme.lines[idx].size = size

  renderMeme()
}

function onDecrease(idx) {
  var size = gMeme.lines[idx].size
  size--
  gMeme.lines[idx].size = size

  renderMeme()
}

function OnSwitchLine(idx) {
  console.log('idx from switch btn:', idx)
  //MODAL//
  gMeme.selcetedLineIdx = idx === 0 ? 1 : 0
  //CANVAS//
  selectedForEdit(gMeme.selcetedLineIdx)
}

function onCanvasClick(ev) {
  const { offsetX, offsetY } = ev

  gMeme.lines.forEach((line, idx) => {
    var posY = line.posY
    var posX = line.posX
    var textWidth = line.textWidth

    if (
      offsetY >= posY - line.size &&
      offsetY <= posY &&
      offsetX >= posX &&
      offsetX <= posX + textWidth
    ) {
      //MODAL//
      gMeme.selcetedLineIdx = idx

      //CANVS//

      selectedForEdit(idx)
    }
  })
}

function selectedForEdit(idx) {
  var textInput =
    idx === 0
      ? document.querySelector('.top-text')
      : document.querySelector('.bottom-text')
  textInput.focus()

  renderMeme()
}

function onSetTextLeft(idx) {
  gMeme.lines[idx].posX = 10
  renderMeme()
}

function onSetTextCenter(idx) {
  var text = gMeme.lines[idx].txt
  var textWidth = gCtx.measureText(text).width
  var posX = elCanvas.width - textWidth
  gMeme.lines[idx].posX = posX / 2
  renderMeme()
}

function onSetTextRight(idx) {
  var text = gMeme.lines[idx].txt
  var textWidth = gCtx.measureText(text).width
  var posX = elCanvas.width - textWidth
  gMeme.lines[idx].posX = posX
  renderMeme()
}

function onSetFontFamily(idx, value) {
  gMeme.lines[idx].font = value
  console.log('idx,value:', idx, value)
  renderMeme()
}

document.addEventListener('keydown', onMoveTo)

function onMoveTo(ev) {
  switch (ev.key) {
    case 'ArrowUp':
      moveTextUp()
      break
    case 'ArrowDown':
      moveTextDown()
      break
    case 'ArrowLeft':
      moveTextLeft()
      break
    case 'ArrowRight':
      moveTextRight()
      break
  }
}

function moveTextUp() {
  var idx = gMeme.selcetedLineIdx
  var currPos = gMeme.lines[idx].posY
  currPos = currPos - 10
  gMeme.lines[idx].posY = currPos
  renderMeme()
}

function moveTextDown() {
  var idx = gMeme.selcetedLineIdx
  var currPos = gMeme.lines[idx].posY
  currPos = currPos + 10
  gMeme.lines[idx].posY = currPos
  renderMeme()
}

function moveTextLeft() {
  var idx = gMeme.selcetedLineIdx
  var currPos = gMeme.lines[idx].posX
  currPos = currPos - 10
  gMeme.lines[idx].posX = currPos
  renderMeme()
}

function moveTextRight() {
  var idx = gMeme.selcetedLineIdx
  var currPos = gMeme.lines[idx].posX
  currPos = currPos + 10
  gMeme.lines[idx].posX = currPos
  renderMeme()
}

function onDeletLine(idx) {
  var deletedIdx = gMeme.selcetedLineIdx

  //MADAL//
  var lines = gMeme.lines
  lines.splice(deletedIdx, 1)
  var currIdx = deletedIdx === 0 ? 1 : 0

  gMeme.selcetedLineIdx = currIdx
  console.log((gMeme.selcetedLineIdx = currIdx))

  //CANVAS//
  var elNewLine = document.querySelector('.new-line')
  var elDeleteBtn = document.querySelector('.delete-btn')
  var elAddBtn = document.querySelector('.add-btn')
  var elSwitchBtn = document.querySelector('.switch-btn')

  elNewLine.classList.add('hidden')
  elDeleteBtn.classList.add('hidden')
  elAddBtn.classList.remove('hidden')
  elSwitchBtn.classList.add('hidden')

  renderMeme()
}

document.addEventListener('DOMContentLoaded', function () {
  var elNewBtn = document.querySelector('.btn-new-canvas')

  elNewBtn.addEventListener('click', function () {
    location.reload()
  })
})

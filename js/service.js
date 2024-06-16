'use strict'

var elCanvas = document.querySelector('.canvas')
var gCtx = elCanvas.getContext('2d')
var newLine = []
var gMeme = {
  selcetedImgId: 0,
  selcetedLineIdx: 0,
  lines: [
    {
      txt: 'I love meme',
      size: 30,
      color: 'white',
      strokeColor: 'black',
      font: 'Impact',
      posY: 50,
      posX: 150,
    },
  ],
}

function getMeme() {
  //render img//
  var img = new Image()
  img.src = gImg[gMeme.selcetedImgId].url

  img.onload = function () {
    gCtx.clearRect(0, 0, elCanvas.width, elCanvas.height)
    gCtx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height)

    //render txt //
    gMeme.lines.forEach((line, idx) => {
      gCtx.font = `${line.size}px ${line.font}`
      gCtx.fillStyle = line.color
      gCtx.strokeStyle = line.strokeColor

      var posX = line.posX
      var posY = line.posY
      gCtx.fillText(line.txt, posX, posY)
      gCtx.strokeText(line.txt, posX, posY)

      //FRAME//
      if (gMeme.selcetedLineIdx === idx) {
        var textWidth = gCtx.measureText(line.txt).width
        line.textWidth = textWidth

        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 2
        gCtx.strokeRect(posX, posY - line.size, textWidth + 10, line.size + 10)
      }
    })
  }
}

function setLineTxt(idx) {
  var topText = document.querySelector('.top-text').value
  var bottomText = document.querySelector('.bottom-text').value

  var txt = idx === 0 ? topText : bottomText
  //MODAL//
  gMeme.lines[idx].txt = txt
  gMeme.selcetedLineIdx = idx

  renderMeme()
}

function setImg(url, id) {
  //MODAL//
  gMeme.selcetedImgId = id
  gImg[id].url = url

  //CANVAS//
  gCtx.clearRect(0, 0, elCanvas.width, elCanvas.height)

  var elMemeContainer = document.querySelector('.meme-container')
  var elGallery = document.querySelector('.gallery')

  elMemeContainer.style.display = 'block'
  elGallery.style.display = 'none'

  renderMeme()
}

function getNewColor(color, idx) {
  gMeme.lines[idx].color = color
  renderMeme()
}

function addLine(idx) {
  if (gMeme.lines.length === 2) return

  let posX = 150
  let posY = idx === 0 ? 350 : 50
  let currIdx = idx === 0 ? 1 : 0

  newLine = {
    txt: 'Meme is fun!',
    size: 30,
    color: 'white',
    strokeColor: 'black',
    font: 'Impact',
    posX: posX,
    posY: posY,
  }
  gMeme.selcetedLineIdx = currIdx
  gMeme.lines.push(newLine)
  showLine()
  selectedForEdit(currIdx)
}

function showLine() {
  var elNewLine = document.querySelector('.new-line')
  var elDeleteBtn = document.querySelector('.delete-btn')
  var elSwitchBtn = document.querySelector('.switch-btn')
  var elAddBtn = document.querySelector('.add-btn')

  elNewLine.classList.remove('hidden')
  elDeleteBtn.classList.remove('hidden')
  elSwitchBtn.classList.remove('hidden')
  elAddBtn.classList.add('hidden')
}

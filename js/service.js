'use strict'

var elCanvas = document.querySelector('.canvas')
var gCtx = elCanvas.getContext('2d')

var gImg = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]

var gMame = {
  selcetedImgId: 5,
  selcetedLineIdx: 0,
  lines: [
    {
      txt: 'I love meme',
      size: '20px sans-serif',
      color: 'red',
    },
  ],
}

function getMeme() {
  //render img//
  var img = new Image()
  img.src = gImg[0].url
  img.onload = function () {
    gCtx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height)

    //render txt//
    var size = gMame.lines[0].size
    var color = gMame.lines[0].color
    var txt = gMame.lines[0].txt

    gCtx.font = size
    gCtx.fillStyle = color

    gCtx.fillText(txt, 150, 70)
  }
}

function setLineTxt() {
  var userText = document.getElementById('textInput').value

  //MODAL//
  gMame.lines[0].txt = userText
  gMame.selcetedLineIdx = 1

  // CANVAS//

  gCtx.fillStyle = 'red'
  gCtx.font = '30px'
  gCtx.fillText(userText, 50, 100)
  renderMeme()
}

function setImg(url) {
  var img = new Image()
  img.src = url
  img.onload = function () {
    gCtx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height)
  }
}

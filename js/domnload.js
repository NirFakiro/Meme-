//SAVE  ON CANVAS PAGE//
function downloadCanvas() {
  const canvas = document.querySelector('.canvas')

  const dataUrl = canvas.toDataURL('image/png')

  const img = document.createElement('img')
  img.src = dataUrl

  const galleryItem = document.createElement('div')
  galleryItem.classList.add('my-memes-item')
  galleryItem.appendChild(img)

  const gallery = document.querySelector('.my-memes')
  gallery.appendChild(galleryItem)
  showMyMemes()
}

//DOWNLOAD//
function download() {
  const canvas = document.querySelector('.canvas')
  const dataUrl = canvas.toDataURL('image/png')
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = 'my-canvas.png'
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()

  document.body.removeChild(a)
}


export function addClass (href) {
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', href)
  document.getElementsByTagName('head')[0].appendChild(link)
}

export function removeClass (href) {
  const links = document.getElementsByTagName('link')
  for (var i = links.length - 1; i >= 0; i--) {
    const link = links[i]
    if (link && link.getAttribute('href') != null && link.getAttribute('href').indexOf(href) !== -1) {
      link.parentNode.removeChild(link)
    }
  }
}

export function removeAllClass () {
  removeClass(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
  removeClass(`${process.env.VUE_APP_RES_URL}/theme/theme_eye.css`)
  removeClass(`${process.env.VUE_APP_RES_URL}/theme/theme_gold.css`)
  removeClass(`${process.env.VUE_APP_RES_URL}/theme/theme_night.css`)
}

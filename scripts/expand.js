// Author: Simon Gaillard <gaillard.simon@gmail.com>
// Version: 0.1.0
// License: MIT

'use strict'

const div = document.querySelectorAll('.links div')

console.log(div)

for (var element of div) {
  if (element.scrollHeight > element.clientHeight) {
    console.log(element, 'overflowed')
    var divTitle = element.firstElementChild
    divTitle.innerHTML = divTitle.innerHTML + "<span class=\"expander\">+</span>"
    element.addEventListener('click', function(event) {
      if (this.hasAttribute('expanded')) {
        this.removeAttribute('expanded')
        this.removeAttribute('style')
        this.firstElementChild.childNodes[1].innerText = "+"
      } else {
        this.style.height = 'auto'
        this.toggleAttribute('expanded')
        this.firstElementChild.childNodes[1].innerText = "-"
      }
    })
  }
}

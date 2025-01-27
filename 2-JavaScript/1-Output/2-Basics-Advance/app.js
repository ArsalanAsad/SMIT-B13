const divElement = document.getElementById('parent')
const pElements = document.getElementsByTagName('p')

const firstP = pElements[0]
const secondP = pElements[1]

const nthChild = (divElement.childNodes)[4]
//console.log(nthChild.nodeType)

//const firstChild = divElement.firstChild
const firstChild = divElement.firstElementChild
//const lastChild = divElement.lastChild
const lastChild = divElement.lastElementChild
const divParent = divElement.parentNode
const divSibling = divElement.nextElementSibling
const divPreSibling = divElement.previousElementSibling

//console.log(divElement.childNodes, nthChild, firstChild, lastChild)
//console.log(divPreSibling, lastChild.tagName, divSibling)

const ulElement = document.getElementById("list")
const ulStyling = ulElement.getAttribute("style")
const isStyled = ulElement.hasAttribute("style")
ulElement.removeAttribute('class')
ulElement.setAttribute("class", "d-flex")
ulElement.classList.add("cde")
//console.log(ulStyling, isStyled)
//console.log(ulElement.hasAttribute("class"))
//console.log(ulElement.outerHTML, ulElement.innerHTML)

const newDiv = document.querySelector("#new")
newDiv.innerHTML += '<p>Pakistan</p>'
//const newP = '<p>Pakistan</p>'
const pElement = newDiv.firstElementChild
const newP = document.createElement("p")
const pText = document.createTextNode("Pakistan Zindabad")
newP.appendChild(pText)
//newDiv.appendChild(newP)
newDiv.insertBefore(newP, pElement)
pElement.insertAdjacentHTML('beforebegin', newP)

const newImg = document.createElement("img")
newImg.setAttribute("src","https://sherbrotherpakistan.com/wp-content/uploads/2024/01/rent-a-car-karachi-1024x768.jpeg")
newImg.setAttribute("class", "image")
newDiv.appendChild(newImg)

newDiv.removeChild(pElement)
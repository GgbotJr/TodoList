let $ = document

let textInput = $.querySelector("#input")
let ulList = $.querySelector("#ul")
let p = $.getElementById("p")

let del = null

textInput.addEventListener("keydown", function (event) {
  console.log(event)
  if (event.which === 13){
    if (textInput.value === "" || textInput.value === " "){
      alert("Please Inter Correctly")
      event.preventDefault()
      }
      else {
        event.preventDefault()
      let textInputValue = textInput.value.trim()
      
      let newLi = $.createElement("li")
      let newSpan = $.createElement("span")
      let newI = $.createElement("i")
  
      newLi.className = "list-group-item d-flex justify-content-between align-items-center"
      newSpan.innerHTML = textInputValue
      newI.className = "fa fa-trash-o delete"
  
      newI.addEventListener("click", function (event) {
        event.target.parentElement.remove()
        p.style.display = "block"
        setInterval(function () {
          p.style.display = "none"
        },1500)
      })
  
      newLi.append(newSpan, newI)
      ulList.append(newLi)

      textInput.value = ""
      
      }
    }
})




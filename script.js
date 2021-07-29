const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const reset_bth = document.getElementById('reset')


// define more constants and variables here

btn_toggle.onclick = () => {
  if(btn_toggle.innerHTML === "Show author"){
    author.innerHTML = "640631102 PANNAWIT PANWONG"
    btn_toggle.innerHTML = "Show Calculation"
  }
  else{

    author.innerHTML = 640631102+ parseInt(length.value)
  btn_toggle.innerHTML = "Show author"
  }
}

reset_bth.onclick = () => {
  length.value = 5
  color.value = "#FF0000"
}
// more codes for Search and Reset buttons here
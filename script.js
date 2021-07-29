const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

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

// more codes for Search and Reset buttons here
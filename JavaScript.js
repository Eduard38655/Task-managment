
 
function Add() {
    let task = document.getElementById("task").value;
    let aside = document.getElementById("aside");
    
    if (task=="" ) {
        alert("The input can't be empty")
    }
    else if(task.length>=17 ){
alert("You has passed the limit (17)")
    }

    else if (task.length<=5) {
        alert("It must contain at least 6 character")

    }
    else{ 



let div=document.createElement("div")
div.setAttribute("id","input_container")
aside.appendChild(div)

 

let input_remove=document.createElement("button")
input_remove.textContent="Remove"
let input_ready=document.createElement("button")
input_ready.textContent="Ready"

div.appendChild(input_remove)
div.appendChild(input_ready)

let text_container=document.createElement("div")

text_container.setAttribute("id","text_box")

let text=document.createElement("p")
text.innerHTML=task
 


text_container.appendChild(text)
div.appendChild(text_container)

input_ready.addEventListener("click",remove_task)

function remove_task(params) {
  text.classList.toggle("line-through")
}

input_remove.addEventListener("click",mark_ready)

function mark_ready(params) {
    div.remove()
}
    }
   
}

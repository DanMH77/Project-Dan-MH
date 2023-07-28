const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const Enter = document.getElementById("buttonenter");
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
var counter = document.getElementById("account")
let List 
let id = 0;


const DATE = new Date ()       //Actualiza la fecha actual de manera automatica
date.innerHTML = DATE.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})

//function to add task
function addTask (task,done, wipe) {
if(wipe){return} // si existe wipe es true si no es false
const Done = done ? check : uncheck  //si done es verdadero check si no uncheck
const LINE = done ? lineThrough :''
const elemento = 
`<li id="elemento">     
<i  class=" checks fa ${Done}" data="done"></i>
<p class="text ${LINE}">${task}</p>
<i class="fa fa-trash de" data="eliminado" onclick="deleteV(this)"></i> 
</li>`
    list.insertAdjacentHTML("beforeend",elemento);     //Esto insertara la lista al HTML
    console.log("esta es la tarea",task,done)       //antes del final 
    
 }

//Function of task done.
function taskDone(element) {
    //debugger
    const isChecked = element.dataset.done === 'done';
    element.dataset.done = isChecked ? 'undone' : 'done'; // Alternar el estado actual
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    const textElement = element.parentNode.querySelector('.text');
    if (!isChecked) {
        textElement.style.textDecoration = lineThrough;
    } else {
        textElement.style.textDecoration = 'none';
    }
    //
    const checks=list.querySelectorAll('.checks')
    let contador=0
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].dataset.done==='done') {
            contador++;
        }
    }
    counter.textContent=contador
}

Enter.addEventListener('click', function(){
    //debugger
    const task = input.value 
    if(task){
        addTask(task,false,false)
    }
        input.value=""
        id++
    })

    document.addEventListener("keyup" ,function(event){
        //debugger
        if(event.key=='Enter'){
            const task = input.value
        if(task){
            addTask(task,false,false)
        }
            input.value=''
            id++
        }
})

list.addEventListener('click',function(event){
    //debugger
    //console.log(event);
    const element = event.target ;
    const elementData = element.getAttribute('data');
    if(elementData==='done'){
        taskDone(element)
    }
    else if (elementData==='wipe'){
        taskdelete(element)
    }
})
function deleteV(element){
element.parentNode.remove();
}




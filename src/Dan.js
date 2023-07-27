const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const Enter = document.getElementById("buttonenter");
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let List 
let id = 0;

const DATE = new Date ()
date.innerHTML = DATE.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})




//function to add task
function addTask (task,id,done, wipe) {
if(wipe){return} // si existe eliminado es true si no es false

const Done = done ? check : uncheck  //si realizado es verdadero check si no uncheck
const LINE = done ? lineThrough :''
const elemento = 
`<li id="elemento">
<i class="fa ${Done}" data="done" id="${id}"></i>
<p class="text ${LINE}">${task}</p>
<i class="fa fa-trash de" data="eliminado" id="${id}"></i> 
</li>`
    list.insertAdjacentHTML("beforeend",elemento);
    
    
 }
//Function of task done.
function taskDone(element) {
    const isChecked = element.dataset.done === 'done';
    element.dataset.done = isChecked ? 'undone' : 'done'; // Alternar el estado actual
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    const textElement = element.parentNode.querySelector('.text');
    if (!isChecked) {
        textElement.style.textDecoration = lineThrough;
        console.log("check");
    } else {
        textElement.style.textDecoration = 'none';
        console.log("uncheck");
    }
}

Enter.addEventListener('click', function(){
    const task = input.value 
    if(task){
        addTask(task,id,false,false)
    }
        input.value=""
        id++
    })

    document.addEventListener("keyup" ,function(event){
        if(event.key=='Enter'){
            const task = input.value
        if(task){
            addTask(task,id,false,false)
        }
            input.value=''
            id++
        }
})

list.addEventListener('click',function(event){
    //console.log(event);
    const element = event.target ;
    const elementData = element.getAttribute('data');
    console.log(element);
    if(elementData==='done'){
        taskDone(element)
    }
    else if (elementData==='wipe'){
        taskdelete(element)
    }
})





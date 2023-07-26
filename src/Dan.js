const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const Enter = document.getElementById("buttonenter");
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let id = 0
//function to add task
function addtask (task,id,done, wipe) {
if(wipe){return}

const Done = done ?check :uncheck
const LINE = done ?lineThrough :''

const element1 = `<li>
<i class="fa ${Done}" data="Done" id="${id}"></i>
<p class="text ${LINE}"> ${task}</p>
<i class="fa fa-trash de" data="wipe" id="${id}"></i>
</li>`

    list.insertAdjacentHTML("beforeend",element1);
 }

Enter.addEventListener('click', function(){
const task = input.value 
if(task){
    addtask(task,id,false,false)
}
     input.value=""
     id++
})

document.addEventListener("keyup" ,function(event){
    if(event.key=='Enter'){
    const task = input.value
    if(task){
        addtask(task,id,false,false)
    }
    input.value=''
    id++
    }
})

list.addEventListener('click',function(event){
const element = event.target;
const elementData = element.attributes.data.value;
if(elementData==="done"){
    taskDone(element)
}
else if(elementData==='wipe'){
    taskWipe(element)
}
})

//Function of task done.
function taskDone(element){
    element.classList.toggle(check);
    element.classList.toggle(uncheck)
}
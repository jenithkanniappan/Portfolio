
// todolist fonctions

let todoList=[]

function addTask(){
let inputTask = document.getElementById("inputValue");
let textValue = inputTask.value.trim();
if(textValue){
    todoList.push(textValue);
    inputTask.value="";
    showTask();
}
else{
    alert("Kindly provide your input for a to-do list that will serve as a reminder for you.")
}
}

function showTask(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML="";
    todoList.forEach((jenith,index)=>{
    let li =document.createElement("li");
    li.innerHTML=`${jenith}
    <div class="btn">
    <button onclick='editTask(${index})'><i class="fa-solid fa-pen"></i></button>
    <button onclick='deleteTask(${index})'><i class="fa-solid fa-trash"></i></button></br>
    </div>`
    taskList.appendChild(li);
    })

    
}

function editTask(index){
    let editValue = prompt("edit",todoList[index]);
    if(editValue){
        todoList[index]=editValue.trim();
        showTask();
    }
}

function deleteTask(index){
    todoList.splice(index,1)
    showTask()
}


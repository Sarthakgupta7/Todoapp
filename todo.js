let todoList=[{
  item:'buy milk',
  duedate:'4/10/23',},
  {
   item:'buy rusk',
   duedate:'4/10/23'
},  
{
  item:'Go home',
  duedate:'18/03/2025'
}
];
displayItems();
function addtodo() {
 let inp=document.querySelector("#todoip");
 let todoItem=inp.value;
 let td=document.querySelector("#todoDate");
 let ddate=td.value;
 todoList.push({item:todoItem , duedate:ddate});
 inp.value='';
 td.value='';
 displayItems();
}
function displayItems(){
  let containerElements=document.querySelector(".todo-container");

let newHtml='';

  for (let i=0;i<todoList.length;i++){
    let {item, duedate}=todoList[i];
    newHtml+= `
    <span>${item}</span>
    <span>${duedate}</span>

    <button class= "btn-d" onclick="
    todoList.splice(${i},1);
     displayItems() ">Delete</button>
    `;

 
  }
  containerElements.innerHTML=newHtml;
}
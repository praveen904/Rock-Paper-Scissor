const todolist=[{name:" ",date:" "}];

function render(){
  let  todoHTML='';

  for (let i=0; i<todolist.length ; i++){
    const todo=todolist[i];
    const name=todo.name;
    const date=todo.date;
    const html=`
      <div>${name}</div>
      <div>${date}</div>
      <button onclick="
        todolist.splice(${i},1);
        render()"; 
        class="delete-button
      "> delete</button>`;   
    todoHTML+=html;
  }

  document.querySelector('.js-todo-list').innerHTML=todoHTML;
}

function addTodo(){
  const inputElement=document.querySelector('.js-name');
  const name= inputElement.value;
  const inputDate=document.querySelector('.js-date');
  const date= inputDate.value;
  todolist.push({name,date});

  inputElement.value='';
  render();
}
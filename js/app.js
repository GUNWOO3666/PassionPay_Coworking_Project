const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

function handleToDoSubmit(event) {
  // submit 이벤트의 새로고침을 막는다.
  event.preventDefault();
  // newTodo 변수에 현재 입력한 value를 넣는다.
  const newTodo = toDoInput.value;
  // 화면에 보이는 value를 초기화시킨다.
  toDoInput.value = '';
}

toDoForm.addEventListener('submit', handleToDoSubmit);
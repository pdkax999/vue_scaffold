export function getTodos() {
  
  return  JSON.parse(localStorage.getItem('todos') || '[]')
}


export function setTodos(todos) {
   
  return localStorage.setItem('todos',JSON.stringify(todos));
  
}
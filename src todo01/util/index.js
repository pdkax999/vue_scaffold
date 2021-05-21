
 const TODOLISTKEY =  'todolistkey'


export default{

   setTodo(todoList) {

    localStorage.setItem(TODOLISTKEY,JSON.stringify(todoList));
 
  },
    getTodo() {
 
   return JSON.parse(localStorage.getItem(TODOLISTKEY) || '{}');
 
   }
}


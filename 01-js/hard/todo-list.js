/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/



class Todo {
  constructor(){
    this.list = [];
  }
  add(todo){
    this.list.push(todo)
  }
  remove(idx){
    if (idx >= 0 && idx < this.list.length) {
      this.list = [...this.list.slice(0, idx), ...this.list.slice(idx + 1)];
    }
  }
  update(idx,modif){
    if (idx >= 0 && idx < this.list.length) {
      this.list[idx] = modif;
    }
  }
  getAll(){
    return this.list;
  }
  get(idx){
    if (idx >= 0 && idx < this.list.length) {
      return  this.list[idx]
    }
    return null;
  }
  clear(){
    this.list = [];
  }

}

module.exports = Todo;

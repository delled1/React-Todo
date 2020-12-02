import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import "./Style.css"

const toDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Constructor with state
  constructor () {
    super();
    this.state = {
      toDo
    }
  }

  //Class methods with update state

  //Add task to todo list
  addTask = (e, task) => {
    // console.log("ADD")
    e.preventDefault();

    //Spreads toDo list & adds new task
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      toDo: [...this.state.toDo, newTask]
    })

  }

  //Toggle completed tasks
  toggleTask = (taskId) => {
    // console.log("toggling item", taskId);

    //Maps over toDo, looks for the item that is clicked, if the clicked taskId matches the task.id then the completed boolean is toggled, otherwise return the task unmodified
    
    this.setState({
      ...this.setState,
      toDo: this.state.toDo.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        else{
          return task;
        }
      })
    })

  }

  //Clear completed tasks
  clearTask = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      toDo: this.state.toDo.filter((task) => !task.completed)
    })
   

  }


  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList 
        todo={this.state.toDo}
        toggleTask={this.toggleTask}
        
        />
        <TodoForm 
        addTask={this.addTask}
        clearTask={this.clearTask}/>
      </div>
    );
  }
}

export default App;

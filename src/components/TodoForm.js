import React from 'react';

class TodoForm extends React.Component{

    //Constructor with state
    constructor () {
        super();
        this.state = {
            newTask: ""
        }
    }

    handleChanges = (e) => {
        //updates state with each keystroke
        
        this.setState({
            ...this.state,
            newTask: e.target.value
        })
    }

    //Class to submit form
    submitTask = (e) => {
        e.preventDefault();
        this.props.addTask(e, this.state.newTask)
        this.setState({newTask: ""})
    }

    // removeTask = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //       ...this.state,
    //       toDo: this.state.toDo.filter((task) => !task.completed)
    //     })
    // }
    

    render(){
        
        return (
            <form onSubmit={this.submitTask}>
            <input
            value={this.state.newTask}
            onChange={this.handleChanges}

            type="text"
            name="item"
            />
            <button>Add Todo</button>
            <button onClick={this.props.clearTask}>Clear Completed Task</button>
            </form>
        )
    }
}

export default TodoForm
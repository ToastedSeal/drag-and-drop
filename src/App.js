import React, { Component } from 'react';
import Header from './components/Header.js'

import './App.css';
import DropZone from './components/DropZone.js';
import DraggableBox from './components/Draggable.js';
import FilterBox from './components/FilterBox.js';


class App extends Component {

  state = {
    leftTasks: [],
    rightTasks: []
  }

  componentDidMount() {
    this.createDraggables(6);
  }

  render() { 
    return (
      <div className="App">
        <Header className="App-header"/>
        <div className = "content-container">
          <DropZone pos="left" doMove={this.moveTask} itemList={this.state.leftTasks}/>
          <main className="main-content">
 
          </main>
          <DropZone pos="right" doMove={this.moveTask} itemList={this.state.rightTasks}/>
        </div>
      </div>
    );
  }

  createDraggables = () => {
    const initItems = [];
    initItems.push(<DraggableBox key={1} name="Filters"><FilterBox /></DraggableBox>)
    initItems.push(<DraggableBox key={2} name="testContent-2"><p>Test Content</p></DraggableBox>)
    initItems.push(<DraggableBox key={3} name="testContent-3"><p>Test Content</p></DraggableBox>)
    initItems.push(<DraggableBox key={4} name="testContent-4"><p>Test Content</p></DraggableBox>)
    initItems.push(<DraggableBox key={5} name="testContent-5"><p>Test Content</p></DraggableBox>)
    initItems.push(<DraggableBox key={6} name="testContent-6"><p>Test Content</p></DraggableBox>)
    this.setState({leftTasks: initItems});
  }

  moveTask = (name,pos,y) => {
    let task = this.state.leftTasks.find((task) => task.props.name === name);

    if(task) {
      if(pos === "left") {
        let newLeft = this.removeTask(task, this.state.leftTasks);
        newLeft = this.insertTask(task, this.state.leftTasks, y);
        this.setState({leftTasks: newLeft});
      } else {
        const newLeft = this.removeTask(task, this.state.leftTasks);
        const newRight = this.insertTask(task, this.state.rightTasks, y);
        this.setState({leftTasks: newLeft, rightTasks: newRight});
      }
    } else {
      task = this.state.rightTasks.find((task) => task.props.name === name);

      if(pos === "right") { 
        let newRight = this.removeTask(task, this.state.rightTasks);
        newRight = this.insertTask(task, this.state.rightTasks, y);
        this.setState({rightTasks: newRight});
      } else {
        const newRight = this.removeTask(task, this.state.rightTasks);
        const newLeft = this.insertTask(task, this.state.leftTasks, y);
        this.setState({leftTasks: newLeft, rightTasks: newRight});
      }
    }
  }

  insertTask = (taskToInsert, taskList, yPos) => {
    const belowTask = taskList.find((task) => {
        const element = document.getElementById(task.props.name);
        return element.getBoundingClientRect().top > yPos;
    });

    if(belowTask) {
      const index = taskList.indexOf(belowTask);
      taskList.splice(index, 0, taskToInsert)
    } else {
      taskList.push(taskToInsert);
    }

    return taskList;
  }

  removeTask = (task, list) => {
    const index = list.indexOf(task);
    list.splice(index, 1);
    return list;
  }

}

export default App;

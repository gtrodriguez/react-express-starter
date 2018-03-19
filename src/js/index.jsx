import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/landing';
import Header from './components/header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItemId: null,
      isAddingNew: false,
      todoItems: [{
        id: 1,
        listId: 1,
        title: 'Get Groceries',
        description: 'Get Milk\nGet Sugar\nGet Eggs\nGet Flour\n',
        isCompleted: true,
        lastUpdated: new Date().toString(),
      },
      {
        id: 2,
        listId: 1,
        title: 'Do taxes',
        description: 'Get Documents\nGo to H&R Block',
        isCompleted: false,
        lastUpdated: new Date().toString(),
      },
      {
        id: 3,
        listId: 1,
        title: 'Change oil',
        description: '',
        isCompleted: false,
        lastUpdated: new Date().toString(),
      }],
    };

    this.handleItemUpdate = this.handleItemUpdate.bind(this);
    this.handleCreateFormStatus = this.handleCreateFormStatus.bind(this);
    this.handleSelectActiveItem = this.handleSelectActiveItem.bind(this);
  }

  componentWillMount() {
    const that = this;
    // get the real todo items
  }

  componentDidMount() {
    //called after everything including sub-components have rendered
  }

  componentWillUnmount() {
  }

  handleCreateFormStatus(isAddingNew) {
    this.setState({
      isAddingNew: isAddingNew
    });
  }

  handleItemUpdate(itemId,item) {
    const cloneState = JSON.parse(JSON.stringify(this.state));
    const targetIndex = cloneState.todoItems.findIndex(item => item.id === itemId);

    //update the item if it exists
    if (targetIndex >= 0) {
      cloneState.todoItems[targetIndex] = item;
    } else {// or push the new item onto the list
      cloneState.todoItems.push(item);
    }

    this.setState({
      todoItems: cloneState.todoItems
    });
  }

  handleSelectActiveItem(activeItemId) {
    this.setState({
      activeItemId: activeItemId
    });
  }

  render() {
    return (
      <Landing
        activeItemId={this.state.activeItemId}
        isAddingNew={this.state.isAddingNew}
        todoItems={this.state.todoItems}
        handleCreateFormStatus={this.handleCreateFormStatus}
        handleItemUpdate={this.handleItemUpdate}
        handleSelectActiveItem={this.handleSelectActiveItem}
      />
    );
  }
}

render(<App />, document.getElementById('app'));

export default App;

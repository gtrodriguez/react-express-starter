import React from 'react';
import { render } from 'react-dom';

import Landing from './pages/landing';

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
        isComplete: true,
        lastUpdated: new Date().toString(),
      },
      {
        id: 2,
        listId: 1,
        title: 'Do taxes',
        description: 'Get Documents\nGo to H&R Block',
        isComplete: false,
        lastUpdated: new Date().toString(),
      },
      {
        id: 3,
        listId: 1,
        title: 'Change oil',
        description: '',
        isComplete: false,
        lastUpdated: new Date().toString(),
      }],
    };

    this.handleItemUpdate = this.handleItemUpdate.bind(this);
    this.handleCreateFormStatus = this.handleCreateFormStatus.bind(this);
    this.handleSelectActiveItem = this.handleSelectActiveItem.bind(this);
  }
  handleCreateFormStatus(isAddingNew, activeItemId) {
    this.setState({
      isAddingNew: isAddingNew,
      activeItemId: (isAddingNew ? activeItemId : null),
    });
  }
  handleItemUpdate(newItem) {
    const cloneState = JSON.parse(JSON.stringify(this.state));
    const targetIndex = cloneState.todoItems.findIndex(item => item.id === newItem.id);

    // update the item if it exists
    if (targetIndex >= 0) {
      cloneState.todoItems[targetIndex] = newItem;
    } else { // or push the new item onto the list
      cloneState.todoItems.push(newItem);
    }

    this.setState({
      todoItems: cloneState.todoItems,
      activeItemId: null,
      isAddingNew: false,
    });
  }
  handleSelectActiveItem(activeItemId) {
    this.setState({
      activeItemId: activeItemId,
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

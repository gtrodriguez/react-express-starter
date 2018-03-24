import React from 'react';
import { render } from 'react-dom';

import Landing from './pages/landing';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    return (
      <Landing
        todoItems={this.state.todoItems}
      />
    );
  }
}

render(<App />, document.getElementById('app'));

export default App;

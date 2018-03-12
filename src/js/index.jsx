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
        description: 'Get Milk\n Get Sugar\n Get Eggs\n Get Flour\n',
        isCompleted: true,
        lastUpdated: new Date(),
      },
      {
        id: 2,
        listId: 1,
        title: 'Do taxes',
        description: 'Get Documents\n Go to H&R Block',
        isCompleted: false,
        lastUpdated: new Date(),
      },
      {
        id: 3,
        listId: 1,
        title: 'Change oil',
        description: '',
        isCompleted: false,
        lastUpdated: new Date(),
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
  }

  componentWillUnmount() {
  }

  handleCreateFormStatus() {
    this.setState({
      gameInstance: newGameInstance
    });
  }

  handleItemUpdate() {
    this.setState({
      gameInstance: newGameInstance
    });
  }

  handleSelectActiveItem() {
    this.setState({
      gameInstance: newGameInstance
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header/>
          <Switch>
            <Route exact path="/:inviteGameId?"
              render = {({ history, match }) => (<Landing
                activeItemId={this.state.activeItemId},
                isAddingNew={this.state.isAddingNew},
                todoItems={this.state.todoItems},
                handleCreateFormStatus={this.handleCreateFormStatus},
                handleItemUpdate={this.handleItemUpdate},
                handleSelectActiveItem={this.handleSelectActiveItem},
              />)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('app'));

export default App;

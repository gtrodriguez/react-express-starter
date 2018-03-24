import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import ToDoItem from './todoitem';

class TodoList extends React.Component {
  render() {
    return (<ListGroup componentClass="ul">
      {
        this.props.todoItems.map(item => (<ToDoItem
          id={item.id}
          listId={item.listId}
          title={item.title}
          description={item.description}
          isCompleted={item.isCompleted}
          lastUpdated={item.lastUpdated}
        />))
      }
    </ListGroup>);
  }
}

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;

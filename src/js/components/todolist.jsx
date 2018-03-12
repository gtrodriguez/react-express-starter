import React from 'react';
import PropTypes from 'prop-types'; 
import { ListGroup } from 'react-bootstrap';

import ToDoItem from './todoitem';

class TodoList extends React.Component {
  render() {
    return (<ListGroup componentClass="ul">
      {
        this.props.todoList.map(item)=>(
          <ToDoItem
            id={item.id}
            listId={item.listId}
            title={item.title}
            description={item.description}
            isCompleted={item.isCompleted}
            lastUpdated={item.lastUpdated}
            isActive={item.id === this.props.activeItemId}
            handleItemUpdate={this.props.handleItemUpdate}
            handleCancel={this.props.handleCancel}
            handleSelectActiveItem={this.props.handleSelectActiveItem}
          />)
      }
      </ListGroup>);
  }
}

TodoList.propTypes = {
  activeItemId: PropTypes.string,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleItemUpdate: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSelectActiveItem: PropTypes.func.isRequired,
};

export default TodoList;

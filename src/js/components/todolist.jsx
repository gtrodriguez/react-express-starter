import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import ToDoItem from './todoitem';

class TodoList extends React.Component {
  render() {
    const activeItemId = this.props.activeItemId;
    return (<ListGroup componentClass="ul">
      {
        this.props.todoItems.map(item => (<ToDoItem
          key={item.id}
          id={item.id}
          listId={item.listId}
          title={item.title}
          description={item.description}
          isComplete={item.isComplete}
          lastUpdated={item.lastUpdated}
          activeItemId={activeItemId}
          isActive={item.id === this.props.activeItemId}
          handleItemUpdate={this.props.handleItemUpdate}
          handleCancel={this.props.handleCancel}
          handleSelectActiveItem={this.props.handleSelectActiveItem}
        />))
      }
    </ListGroup>);
  }
}

TodoList.defaultProps = {
  activeItemId: null,
};

TodoList.propTypes = {
  activeItemId: PropTypes.number,
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleItemUpdate: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSelectActiveItem: PropTypes.func.isRequired,
};

export default TodoList;

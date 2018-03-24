import React from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends React.Component {
  renderDescription() {
    if (this.props.description) {
      return <p><pre>{this.props.description}</pre></p>;
    }
    return null;
  }

  renderInActiveContent() {
    const itemClassName = this.props.isActive ? 'todo-item active' : 'todo-item';
    return (<div
      className={itemClassName}
      onClick={e => { e.preventDefault(); }}
    >
      <h4>{this.props.title}</h4>
      {this.renderDescription()}
      <div>
        <label>Last Updated</label>
        &nbsp;{this.props.lastUpdated}
      </div>
    </div>);
  }

  render() {
    return (<li className="list-group-item">
      { this.renderInActiveContent() }
    </li>);
  }
}

ToDoItem.defaultProps = {
  description: '',
};

ToDoItem.propTypes = {
  id: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isCompleted: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ToDoItem;

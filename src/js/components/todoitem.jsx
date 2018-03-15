import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, Button, FormGroup, ControlLabel, HelpBlock, Checkbox } from 'react-bootstrap';

class ToDoItem extends React.Component {
  toDoItemClassName() {
    if (this.props.isActive) {
      return 'todo-item active';
    }
    return 'todo-item';
  }

  renderActiveContent() {
    return (<Form onSubmit={this.props.handleItemUpdate}>
        <FormGroup
          controlId="title"
        >
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            value={this.props.title}
            placeholder="Enter Title"
          />
        </FormGroup>
        <FormGroup
          controlId="description"
        >
          <ControlLabel>Description</ControlLabel>
          <FormControl
            componentClass="textarea"
            value={this.props.description}
            placeholder="Enter Description"
          />
        </FormGroup>
        <FormGroup
          controlId="isCompleted"
        >
          <Checkbox
            checked={this.props.isCompleted}
          />
        </FormGroup>
        <FormControl
          type="hidden"
          id="id"
          value={this.props.id}
        />
        <FormControl
          type="hidden"
          id="listId"
          value={this.props.listId}
        />
        <FormControl
          type="hidden"
          id="lastUpdated"
          value={this.props.lastUpdated}
        />
        <Button type="submit">Save</Button>
        <Button type="button" onClick={this.props.handleCancel}>Cancel</Button>
      </Form>);
  }

  renderDescription() {
    if (this.props.description) {
      return <p><pre>{this.props.description}</pre></p>;
    }
  }

  renderInActiveContent() {
    return (<div
        className={this.toDoItemClassName()}
        onClick={e => {e.preventDefault();this.props.handleSelectActiveItem(this.props.id);}}>
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
    {
      this.props.isActive ?  this.renderActiveContent() : this.renderInActiveContent()
    }
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
  handleItemUpdate: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSelectActiveItem: PropTypes.func.isRequired,
};

export default ToDoItem;

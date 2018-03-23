import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, Button, FormGroup, ControlLabel, HelpBlock, Checkbox } from 'react-bootstrap';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description,
      isCompleted: props.isCompleted,
      id: props.id,
      listId: props.listId,
      lastUpdated: new Date().toString(),
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // These are useful for syncing local state to global state. These are useful when we want to
  // make a local state we want to play around with for a bit.
  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      description: nextProps.description,
      isCompleted: nextProps.isCompleted,
      id: nextProps.id,
      listId: nextProps.listId,
      lastUpdated: new Date().toString(),
    });
  }

  toDoItemClassName() {
    if (this.props.isActive) {
      return 'todo-item active';
    }
    return 'todo-item';
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.handleItemUpdate({
      title: this.state.title,
      description: this.state.description,
      isCompleted: this.state.isCompleted,
      id: this.state.id,
      listId: this.state.listId,
      lastUpdated: new Date().toString(),
    });
  }

  renderActiveContent() {
    return (<Form onSubmit={this.handleFormSubmit}>
        <FormGroup
          controlId="title"
        >
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            value={this.state.title}
            placeholder="Enter Title"
            onChange={(e) => { this.setState({title: e.target.value}); }}
          />
        </FormGroup>
        <FormGroup
          controlId="description"
        >
          <ControlLabel>Description</ControlLabel>
          <FormControl
            componentClass="textarea"
            value={this.state.description}
            placeholder="Enter Description"
            onChange={(e) => { this.setState({description: e.target.value}); }}
          />
        </FormGroup>
        <FormGroup
          controlId="isCompleted"
        >
          <Checkbox
            checked={this.state.isCompleted}
            onChange={() => { this.setState({isCompleted: !this.state.isCompleted}); }}
          />
        </FormGroup>
        <FormControl
          type="hidden"
          id="id"
          value={this.state.id}
        />
        <FormControl
          type="hidden"
          id="listId"
          value={this.state.listId}
        />
        <FormControl
          type="hidden"
          id="lastUpdated"
          value={this.state.lastUpdated}
        />
        <Button type="submit" onClick={this.handleFormSubmit}>Save</Button>
        <Button type="button" onClick={this.props.handleCancel}>Cancel</Button>
      </Form>);
  }

  renderDescription() {
    if (this.state.description) {
      return <p><pre>{this.state.description}</pre></p>;
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

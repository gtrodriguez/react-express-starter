import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, Button, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description,
      isComplete: props.isComplete,
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
      isComplete: nextProps.isComplete,
      id: nextProps.id,
      listId: nextProps.listId,
      lastUpdated: new Date().toString(),
    });
  }
  toDoItemClassName() {
    if (this.props.isComplete) {
      return 'todo-item complete alert alert-success';
    }
    return 'todo-item';
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.props.handleItemUpdate({
      title: this.state.title,
      description: this.state.description,
      isComplete: this.state.isComplete,
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
          onChange={(e) => { this.setState({ title: e.target.value }); }}
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
          onChange={(e) => { this.setState({ description: e.target.value }); }}
        />
      </FormGroup>
      <FormGroup
        controlId="isComplete"
      >
        <Checkbox
          checked={this.state.isComplete}
          onChange={() => { this.setState({ isComplete: !this.state.isComplete }); }}
        >
          Complete
        </Checkbox>
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
      return <pre>{this.state.description}</pre>;
    }
    return null;
  }

  renderInActiveContent() {
    return (<div
      className={this.toDoItemClassName()}
      onClick={(e) => {
        e.preventDefault();
        // completed items should not be allowed to be re-edited.
        if (this.props.isComplete) {
          return;
        }
        this.props.handleSelectActiveItem(this.props.id);
      }}
    >
      <h4>{this.props.title}</h4>
      {this.renderDescription()}
      <div>
        <label>Last Updated</label>
        &nbsp;{this.props.lastUpdated}
      </div>
      <div>
        <label>Completed</label>
        &nbsp;{ this.props.isComplete.toString()}
      </div>
    </div>);
  }
  render() {
    return (<li className="list-group-item">
      {
        this.props.isActive ? this.renderActiveContent() : this.renderInActiveContent()
      }
    </li>);
  }
}
ToDoItem.defaultProps = {
  description: '',
  title: '',
  lastUpdated: '',
  handleSelectActiveItem: () => {},
};
ToDoItem.propTypes = {
  id: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isComplete: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  handleItemUpdate: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSelectActiveItem: PropTypes.func.isRequired,
};

export default ToDoItem;

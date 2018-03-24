import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import ToDoItem from './todoitem';

class CreateItemPanel extends React.Component {
  renderAddingContent() {
    return <ToDoItem
          id={this.props.activeItemId}
          listId={1}
          isComplete={false}
          lastUpdated={new Date().toString()}
          isActive={true}
          handleItemUpdate={this.props.handleItemUpdate}
          handleCancel={(e) => {e.preventDefault();
            this.props.handleCreateFormStatus(false);}}
      />;
  }

  renderButtonPanel() {
    return <div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          // prevent editing while another form is active
          if (this.props.activeItemId != null) {
            return;
          }
          this.props.handleCreateFormStatus(
            true, Math.floor(Math.random() * 1000000));}}
      >
        Add New Item
      </Button>
    </div>;
  }

  render() {
    return (
      <div className="create-item-panel">
        {
            this.props.isAddingNew ? this.renderAddingContent() : this.renderButtonPanel()  
        }
      </div>);
  }
}

CreateItemPanel.defaultProps = {
  activeItemId: null,
};

CreateItemPanel.propTypes = {
  isAddingNew: PropTypes.bool.isRequired,
  activeItemId: PropTypes.number,
  handleCreateFormStatus: PropTypes.func.isRequired,
  handleItemUpdate: PropTypes.func.isRequired,
};

export default CreateItemPanel;
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import ToDoItem from './todoitem';

class CreateItemPanel extends React.Component {
  renderAddingContent() {
    return <ToDoItem
          id={Math.floor(Math.random() * 1000000)}
          listId={1}
          isCompleted={false}
          lastUpdated={new Date()}
          isActive={true}
          handleItemUpdate={this.props.handleItemUpdate}
          handleCancel={(e) => {e.preventDefault(); this.props.handleCreateFormStatus(false);}}
      />;
  }

  renderButtonPanel() {
    return <div>
      <Button
        onClick={(e) => {e.preventDefault(); this.props.handleCreateFormStatus(true);}}
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

CreateItemPanel.PropTypes = {
  isAddingNew: PropTypes.bool.isRequired,
  handleCreateFormStatus: PropTypes.func.isRequired,
  handleItemUpdate: PropTypes.func.isRequired,
};

export default CreateItemPanel;
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TodoList from '../components/todolist';
import CreateItemPanel from '../components/createitempanel';

class Landing extends React.Component {
  render() {
    return (<div id="connectx-root" className="landing-page">
      <Grid id="game-container">
        <Row>
          <Col sm={12}>
            <h2 className="title">Welcome to our To Do List!</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <CreateItemPanel
              isAddingNew={this.props.isAddingNew}
              handleCreateFormStatus={this.props.handleCreateFormStatus}
              handleItemUpdate={this.props.handleItemUpdate}
              activeItemId={this.props.activeItemId}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p>Let&apos;s get shit done!</p>
            <hr />
            <div className="landing-content">
              <TodoList
                todoItems={this.props.todoItems}
                activeItemId={this.props.activeItemId}
                handleItemUpdate={this.props.handleItemUpdate}
                handleSelectActiveItem={this.props.handleSelectActiveItem}
                handleCancel={() => {
                  this.props.handleSelectActiveItem(null);
                }}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

Landing.defaultProps = {
  inviteGameId: '',
  activeItemId: null,
};

Landing.propTypes = {
  isAddingNew: PropTypes.bool.isRequired,
  activeItemId: PropTypes.number,
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCreateFormStatus: PropTypes.func.isRequired,
  handleItemUpdate: PropTypes.func.isRequired,
  handleSelectActiveItem: PropTypes.func.isRequired,
};

export default Landing;

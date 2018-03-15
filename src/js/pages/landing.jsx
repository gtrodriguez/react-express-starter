import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/header';
import TodoList from '../components/todolist';
import CreateItemPanel from '../components/createitempanel';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

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
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p>Let's get shit done!</p>
            <hr />
            <div className="landing-content">
              <TodoList 
                activeItemId={this.props.activeItemId}
                todoItems={this.props.todoItems}
                handleItemUpdate={this.props.handleItemUpdate}
                handleSelectActiveItem={this.props.handleSelectActiveItem}
                handleCancel={() => {this.props.handleCreateFormStatus(false); this.props.handleSelectActiveItem(null); }}
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
  activeItemId: null,
  inviteGameId: '',
};

Landing.propTypes = {
  activeItemId: PropTypes.number,
  isAddingNew: PropTypes.bool.isRequired,
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCreateFormStatus: PropTypes.func.isRequired,
  handleItemUpdate: PropTypes.func.isRequired,
  handleSelectActiveItem: PropTypes.func.isRequired,
};

export default Landing;

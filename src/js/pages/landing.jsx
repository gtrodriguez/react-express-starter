import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TodoList from '../components/todolist';
import CreateItemPanel from '../components/createitempanel';

class Landing extends React.Component {
  render() {
    return (<div id="todo-root" className="landing-page">
      <Grid id="todo-layout">
        <Row>
          <Col sm={12}>
            <h2 className="title">Welcome to our To Do List!</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <CreateItemPanel />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p>Let&apos;s get shit done!</p>
            <hr />
            <div className="landing-content">
              <TodoList
                todoItems={this.props.todoItems}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

Landing.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Landing;

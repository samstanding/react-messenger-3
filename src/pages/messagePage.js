import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { triggerSend } from '../redux/actions/messageActions';
import GetMessage from '../components/messages'

const propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.shape({ push: PropTypes.func }),
  };
  
  const defaultProps = {
    dispatch: () => {},
    history: { push: () => {} },
  };
  
  const mapStateToProps = state => ({
    name: state.name,
    message: state.message,
  });
  
  class Message extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        message: '',
      };
      this.send = this.send.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    send(event) {
        event.preventDefault();
        console.log(this.state.name, this.state.message);
        this.props.dispatch(triggerSend(this.state.name, this.state.message));
    }
      
    
      handleInputChange(event) {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
    
        this.setState({
          [name]: value,
        });
      }
    
    
      render() {
        return (
          <div>
            <form onSubmit={this.send}>
              <h1>Send a Message!</h1>
              <div>
                <label htmlFor="name">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="message">
                  Message:
                  <input
                    type="text"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div>
                <input
                  type="submit"
                  name="submit"
                  value="Send!"
                />
              </div>
            </form>
            <GetMessage />
          </div>
        );
      }
    }
    
    Message.propTypes = propTypes;
    Message.defaultProps = defaultProps;
    
    export default connect (mapStateToProps) (Message);
    
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMessages } from '../redux/actions/messageActions';

const propTypes = {
    dispatch: PropTypes.func,
    list: PropTypes.shape({ messages: [], isLoading: PropTypes.bool }),
    history: PropTypes.shape({ push: PropTypes.func }),
  };

  const defaultProps = {
    dispatch: () => {},
    list: { messages: [], isLoading: true },
    history: { push: () => {} },
  };

  const mapStateToProps = state => ({
    list: state.messages.messages,
  });
 
  
  
  class GetMessage extends Component {
      constructor(props) {
          super(props);

      }

      componentDidMount() {
        this.props.dispatch(fetchMessages());
      }
      
      render() {
        
        let content;
        if (this.props.list) {
          content = (
                <div>
                    <ul className="messageList">
                    {this.props.list.map(message => (
                      <li key={message.id}> {message.name} says: {message.message}</li>
                    ))}
                    </ul>
                    </div>
            );
          }
        
        return (
            <div>
                {content}
                </div>
        
        )
      }
  }

GetMessage.propTypes = propTypes;
GetMessage.defaultProps = defaultProps;

export default connect(mapStateToProps)(GetMessage);
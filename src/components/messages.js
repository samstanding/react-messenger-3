import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMessages } from '../redux/actions/messageActions';

const propTypes = {
    dispatch: PropTypes.func,
    messages: PropTypes.shape({ name: PropTypes.string, message: PropTypes.string, isLoading: PropTypes.bool }),
    history: PropTypes.shape({ push: PropTypes.func }),
  };

  const defaultProps = {
    dispatch: () => {},
    messages: { name: null, message: null, isLoading: true },
    history: { push: () => {} },
  };

  const mapStateToProps = state => ({
    name: state.name,
    message: state.message,
  });

  class GetMessage extends Component {
      constructor(props) {
          super(props);

      }

      componentDidMount() {
        this.props.dispatch(fetchMessages());
      }

      render() {
          let content = null;

          if (this.props.messages) {
              content = (
                  <div>
                      <p> {this.props.messages.name} {this.props.messages.message}</p>
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

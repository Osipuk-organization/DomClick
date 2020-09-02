import React, { Component } from 'react';
import './ErrorBoundary.scss';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })

    /**
     * todo
     * Реализовать отправку ожибок в журнал
     */
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="_container _row">
          <h3 className="_col-12">Что то пошло не так.</h3>
        </div>
      );
    }

    return this.props.children;
  }
}
import React from 'react';

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      stack: null,
      message: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, stack: error.stack, message: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // logger(error, 'app crash');
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Ребята, произошло что-то странное</h1>
          <button onClick={this.reloadPage}>Перезагрузить страницу</button>

          {/*<button>Показать техническую информацию</button>*/}
          {/*this.state.stack*/}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import React from 'react';
import {Button, Text} from "@vkontakte/vkui";

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
              <Button color={'primary'} onClick={this.reloadPage}>Перезагрузить страницу</Button>

              <Button color={'secondary'}>Показать техническую информацию</Button>
              <Text>{this.state.stack}</Text>
          </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

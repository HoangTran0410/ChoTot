import React, { PureComponent } from 'react';
import { ImageBackground } from 'react-native';

class AppLoading extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { startAsync, onError, onFinish } = this.props;

    try {
      startAsync().then(() => {
        setTimeout(onFinish, 1500)
        // onFinish() 
      });
    } catch (err) {
      onError(err);
    }
  }

  render() {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/images/screens/AppLoading.png')}
      />
    );
  }
}

export default AppLoading;
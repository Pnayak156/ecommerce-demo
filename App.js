import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const myntraLogo = 'https://assets.myntassets.com/assets/images/retaillabs/2018/7/16/3ec24395-fec9-4cf9-9440-9118de40555a1531742032871-myntra-logo.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: myntraLogo}} style={styles.logo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

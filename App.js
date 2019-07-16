import React from 'react';
import { StyleSheet,
  View,
  Image,
  Text,
  TextInput } from 'react-native';

const myntraLogo = 'https://assets.myntassets.com/assets/images/retaillabs/2018/7/16/3ec24395-fec9-4cf9-9440-9118de40555a1531742032871-myntra-logo.png';
const textColor = '#161925';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: myntraLogo}} style={styles.logo}/>
        <Text style={styles.textInfo}> Search Products on Myntra</Text>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>
        </View>
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
  textInfo: {
    marginTop: 80,
    color: textColor,
    fontSize: 11,
  },
  inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 25,
		marginHorizontal: 40,
		backgroundColor: '#f5f5f6',
		borderColor: '#d5d6d9',
		borderWidth: 0.5,
		height: 45,
		borderRadius: 4,
		alignSelf: 'stretch',
		paddingHorizontal: 15,
  },
  input: {
		flex: 1,
		color: '#161925',
		fontSize: 20,
	},
});

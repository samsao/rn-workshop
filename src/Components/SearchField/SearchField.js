import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Colors } from '@mobile/Resources/colors';
import MagnifyingGlasses from '@mobile/Resources/images/magnifying-glass.png';

type Props = {
  onSearchPress: (searchText: string) => void,
  initialText?: string,
};

type State = {
  searchText: string,
};

export class SearchField extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      searchText: props.initialText || '',
    };
  }

  onTextChange = (text: string) => {
    this.setState({ searchText: text });
  };

  onSearchPress = () => {
    this.props.onSearchPress(this.state.searchText);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={this.onTextChange} value={this.state.searchText} />
        <TouchableOpacity onPress={this.onSearchPress}>
          <Image style={styles.searchIcon} source={MagnifyingGlasses} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.searchBackground,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    color: Colors.searchText,
    backgroundColor: Colors.searchBackground,
    height: 32,
    flex: 1,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  searchIcon: {
    width: 24,
    height: 24,
    backgroundColor: Colors.searchBackground,
    marginHorizontal: 5,
  },
});

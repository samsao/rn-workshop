import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '@mobile/Resources/colors';

export type ListItemProps = {
  title: string,
  date: string,
  language: string,
  onItemPress?: () => void,
};

// eslint-disable-next-line react/prefer-stateless-function
export default class ListItem extends Component<ListItemProps> {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onItemPress}>
        <View style={styles.container}>
          <View style={styles.verticalContainer}>
            <Text style={styles.titleText}>{this.props.title}</Text>
            <Text style={styles.dateText}>{this.props.date}</Text>
          </View>
          <Text>{this.props.language}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  verticalContainer: {
    flexDirection: 'column',
  },
  titleText: {
    color: Colors.text,
  },
  dateText: {
    color: Colors.subtitle,
  },
});

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { ListView } from '@mobile/Components/List';
import { type GitRepository, convertGitResponse } from '@mobile/Models/GitRepository';

import { Colors } from '@mobile/Resources/colors';

// eslint-disable-next-line import/no-commonjs
const Repos = require('@mobile/fixtures/samsaoRepositories.json');

type State = {
  repositories: GitRepository[],
};

type Props = {};

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component<Props, State> {
  render() {
    const repositories = Repos.map(convertGitResponse);
    return (
      <View style={styles.container}>
        <ListView items={repositories} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
});

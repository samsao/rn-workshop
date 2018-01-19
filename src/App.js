import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { ListView } from '@mobile/Components/List';
import { type GitRepository } from '@mobile/Models/GitRepository';

import { getRepositoriesOf } from '@mobile/Client/Github';

import { Colors } from '@mobile/Resources/colors';

type State = {
  repositories: GitRepository[],
  error: ?Error,
};

type Props = {};

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      repositories: [],
      error: null,
    };
  }

  componentWillMount() {
    getRepositoriesOf('samsao')
      .then((repositories) => {
        this.setState({
          error: null,
          repositories,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  renderError() {
    if (!this.state.error) return null;
    return <Text style={styles.errorText}>An error occurred{`\n${this.state.error.message}`}</Text>;
  }

  renderRepositories() {
    if (this.state.error) return null;
    return <ListView items={this.state.repositories} />;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderRepositories()}
        {this.renderError()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  errorText: {
    color: Colors.text,
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

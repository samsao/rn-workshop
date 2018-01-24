import React from 'react';
import { FlatList, Alert } from 'react-native';

import ListItem from '@mobile/Components/List/ListItem';
import { type GitRepository } from '@mobile/Models/GitRepository';

type Props = {
  items: GitRepository[],
};

export function ListView(props: Props) {
  return (
    <FlatList
      data={props.items}
      renderItem={({ item }: { ['item']: GitRepository }) => renderListItem(item)}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const showRepositoryDetails = (repository: GitRepository) => {
  Alert.alert(repository.name, repository.description);
};

function renderListItem(item: GitRepository) {
  const onItemPress = () => {
    showRepositoryDetails(item);
  };
  return <ListItem title={item.name} date={item.creationDate} language={item.language} onItemPress={onItemPress} />;
}

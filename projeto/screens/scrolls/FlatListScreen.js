
import { FlatList, Text } from 'react-native';

export default function FlatListScreen() {
  return (
    <FlatList
      data={[...Array(10001).keys()]}
      renderItem={({ item }) => <Text>Item {item}</Text>}
      keyExtractor={(item) => item.toString()}
    />
  );
}
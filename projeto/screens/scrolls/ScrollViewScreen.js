
import { ScrollView, Text } from 'react-native';

export default function ScrollViewScreen() {
  return (
    <ScrollView>
      {Array.from({ length: 101 }).map((_, i) => (
        <Text key={i}>Item {i}</Text>
      ))}
    </ScrollView>
  );
}
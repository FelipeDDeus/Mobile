
import { SectionList, Text } from 'react-native';

export default function SectionListScreen() {
  return (
    <SectionList
      sections={[
        { title: 'A', data: ['Ana', 'Alice'] },
        { title: 'B', data: ['Bruno', 'Beatriz'] }
      ]}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
    />
  );
}
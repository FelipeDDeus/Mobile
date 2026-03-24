
import { View, Text } from 'react-native';
import styles from '../styles/globalStyles';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao aplicativo</Text>
      <Text style={styles.text}>
        Utilize o menu para acessar os modais e as listas com rolagem.
      </Text>
    </View>
  );
}
import styles from '../../styles/modalStyles';
import CustomModal from '../../components/CustomModal';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ModalNoneScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomModal animation="none" />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Início')}>
        <Text style={styles.buttonText}>Voltar para início</Text>
      </TouchableOpacity>
    </View>
  );
}
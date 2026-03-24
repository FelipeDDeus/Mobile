import styles from '../../styles/modalStyles';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomModal from '../../components/CustomModal';

export default function ModalSlideScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomModal animation="slide" />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Início')}>
        <Text style={styles.buttonText}>Voltar para início</Text>
      </TouchableOpacity>
    </View>
  );
}
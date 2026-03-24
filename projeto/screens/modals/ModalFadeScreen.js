import styles from '../../styles/modalStyles';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomModal from '../../components/CustomModal';

export default function ModalFadeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <CustomModal animation="fade" />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Início')}>
                <Text style={styles.buttonText}>Votar para o início</Text>
            </TouchableOpacity>
        </View>
    );
}
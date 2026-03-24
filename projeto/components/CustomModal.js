import { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from '../styles/modalStyles';

export default function CustomModal({ animation }) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Abrir Modal ({animation})</Text>
      </TouchableOpacity>

      <Modal visible={visible} animationType={animation} transparent>
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text>Modal com animação: {animation}</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
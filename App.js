import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonCustom } from './components/ButtonCustom';
import { AlertCustom } from './components/AlertComponent';
import { useState } from 'react';

export default function App() {
  // Se crea la variable inicializada en false para mantener cerrado el modal de primera instancia
  const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);

  const handledPressBtn = () => {
    setIsModalAlertOpen(!isModalAlertOpen)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Boton que llamara el alert */}
      <View style={styles.contentBtn}>
        <ButtonCustom text='Open Alert' color1='#015e9f' color2='#015e9f' onPress={() => handledPressBtn()} />
      </View>

      {/* Componente importado para mostrar en la pantalla */}
      <AlertCustom 
        isModalAlertOpen={isModalAlertOpen}
        onPress={() => setIsModalAlertOpen(!isModalAlertOpen)}
        title='¡Aviso!'
        text='Seguro que quieres realizar esta accion'
        type='warning' // error/warning/successful
        onPressClose={() => setIsModalAlertOpen(!isModalAlertOpen)} // Si type = waning activar esta opcion
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBtn: {
    width: '60%',
    height: 50
  }
});

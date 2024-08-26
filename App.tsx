import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App: React.FC = () => {
  return (
    <View style={styles.main_container}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

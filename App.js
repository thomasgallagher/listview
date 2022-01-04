import { StyleSheet, View, SafeAreaView, useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import ListView from './src/ListView'

export default function App() {
  const colorScheme = useColorScheme()
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer

  return (
    <View style={themeContainerStyle}>
      <StatusBar style="auto" />
      <SafeAreaView edges={['top']} style={styles.safeHeader} />
      <ListView />
      <SafeAreaView edges={['bottom']} style={styles.safeFooter} />
    </View>
  );
}

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: '#b80000',
    flex: 1
  },
  lightContainer: {
    backgroundColor: '#db3e00',
    flex: 1
  },
  safeHeader: {
    backgroundColor: '#008b02'
  },
  safeFooter: {
    backgroundColor: '#006b76',
    marginTop: -1
  }
});

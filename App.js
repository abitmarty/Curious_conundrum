import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PrimaryButton from './components/ui/PrimaryButton';
import { createStackNavigator } from '@react-navigation/stack';
import AddPlayersScreen from './screens/AddPlayersScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameContextProvider from './store/context/GameContext';



const Stack = createStackNavigator();

export default function App() {
  return (
    <GameContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={StartGameScreen} />
          <Stack.Screen name="AddPlayersScreen" component={AddPlayersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

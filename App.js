import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SettingsContextProvider from './store/context/SettingsContext';
import PrimaryButton from './components/ui/PrimaryButton';
import { createStackNavigator } from '@react-navigation/stack';
import AddPlayersScreen from './screens/AddPlayersScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameContextProvider from './store/context/GameContext';
import SetRoundsScreen from './screens/SetRoundsScreen';
import SetThemeScreen from './screens/SetThemeScreen';
import HowToPlayScreen from './screens/HowToPlayScreen';
import ViewCardScreen from './screens/ViewCardScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <SettingsContextProvider>
      <GameContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ViewCardScreen">
            <Stack.Screen name="Home" component={StartGameScreen} />
            <Stack.Screen name="AddPlayersScreen" component={AddPlayersScreen} />
            <Stack.Screen name="SetRoundsScreen" component={SetRoundsScreen} />
            <Stack.Screen name="SetThemeScreen" component={SetThemeScreen} />
            <Stack.Screen name="HowToPlayScreen" component={HowToPlayScreen} />
            <Stack.Screen name="ViewCardScreen" component={ViewCardScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GameContextProvider>
    </SettingsContextProvider>
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

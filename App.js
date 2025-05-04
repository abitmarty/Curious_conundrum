import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SettingsContextProvider from './store/context/SettingsContext';
import PrimaryButton from './components/ui/PrimaryButton';
import { createStackNavigator } from '@react-navigation/stack';
import AddPlayersScreen from './screens/AddPlayersScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameContextProvider from './store/context/GameContext';
import { ActiveGameProvider } from './store/context/ActiveGameContext';
import SetRoundsScreen from './screens/SetRoundsScreen';
import SetThemeScreen from './screens/SetThemeScreen';
import HowToPlayScreen from './screens/HowToPlayScreen';
import ViewCardScreen from './screens/ViewCardScreen';
import CountDownScreen from './screens/CountdownScreen';
import VoteScreen from './screens/VoteScreen';
import VoteResults from './screens/VoteResults';
import ScoreBoard from './screens/ScoreBoard';
import ShowLiar from './screens/ShowLiar';


const Stack = createStackNavigator();

export default function App() {
  return (
    <SettingsContextProvider>
      <GameContextProvider>
        <ActiveGameProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={StartGameScreen} options={{ headerShown: false }} />
              <Stack.Screen name="AddPlayersScreen" component={AddPlayersScreen} options={{ headerShown: false }} />
              <Stack.Screen name="SetRoundsScreen" component={SetRoundsScreen} options={{ headerShown: false }} />
              <Stack.Screen name="SetThemeScreen" component={SetThemeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="HowToPlayScreen" component={HowToPlayScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ViewCardScreen" component={ViewCardScreen} options={{ headerShown: false }} />
              <Stack.Screen name="CountDownScreen" component={CountDownScreen} options={{ headerShown: false }} />
              <Stack.Screen name="VoteScreen" component={VoteScreen} options={{ headerShown: false }} />
              <Stack.Screen name="VoteResults" component={VoteResults} options={{ headerShown: false }} />
              <Stack.Screen name="ShowLiar" component={ShowLiar} options={{ headerShown: false }} />
              <Stack.Screen name="ScoreBoard" component={ScoreBoard} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </ActiveGameProvider>
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

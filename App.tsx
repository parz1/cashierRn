import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddIcon, Button, GluestackUIProvider} from './components';
import {config} from './gluestack-ui.config';

import Animated from 'react-native-reanimated';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Animated.Text sharedTransitionTag="tagtext">hello, there</Animated.Text>

      <Animated.Image
        source={{uri: 'https://picsum.photos/id/39/200'}}
        style={{width: 100, height: 100}}
        sharedTransitionTag="tag"
      />
      <Button
        onPress={() =>
          navigation.navigate('Details', {
            itemId: Math.random() * 100,
            otherParam: 'anything you want here',
          })
        }>
        <Button.Text>Go to Detail</Button.Text>
        {/* <Button.Icon as={AddIcon} /> */}
      </Button>
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  /* 2. Get the param */
  const {itemId, otherParam} = route.params;
  console.log('rerendering DetailsScreen');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.Text sharedTransitionTag="tagtext">hello, there</Animated.Text>
      <Animated.Image
        source={{uri: 'https://picsum.photos/id/39/200'}}
        style={{width: 300, height: 300}}
        sharedTransitionTag="tag"
      />
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button onPress={() => navigation.navigate('Home')}>
        <Button.Text>Go to Home</Button.Text>
        {/* <Button.Icon as={AddIcon} /> */}
      </Button>
      <Button m={2} onPress={() => navigation.goBack()}>
        <Button.Text>Back</Button.Text>
        {/* <Button.Icon as={AddIcon} /> */}
      </Button>
      <Button onPress={() => navigation.popToTop()}>
        <Button.Text>GotoTop</Button.Text>
      </Button>
      <Button
        m={2}
        onPress={() =>
          navigation.setParams({
            itemId: Math.random() * 100,
          })
        }>
        <Button.Text>setParams</Button.Text>
        {/* <Button.Icon as={AddIcon} /> */}
      </Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{itemId: 42}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;

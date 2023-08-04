/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  // Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Alert,
  Box,
  Center,
  GluestackUIProvider,
  Heading,
  Text,
  HStack,
  InfoIcon,
  Select,
  Icon,
  ChevronDownIcon,
  Switch,
} from '../components';

import {config} from '../gluestack-ui.config';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GluestackUIProvider config={config.theme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Center bg="$primary500" h={200} w={'100%'}>
            <Heading color="white" fontWeight="$bold">
              Welcome to Ax.dev {'<RN-Android />'}
            </Heading>
            <Text color="white" fontWeight="$bold">
              A template for anxuan developers
            </Text>
          </Center>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Alert my="$1.5" mx="$2.5" action="info" variant="accent">
              <Alert.Icon as={InfoIcon} mr="$3" />
              <Alert.Text>
                此模版用于安宣内部开发，如需使用请联系安宣技术部
              </Alert.Text>
            </Alert>

            <HStack space="none" reversed={false}>
              <Box w="$20" h="$20" bg="$blue300" />
              <Box w="$20" h="$20" bg="$blue400" />
              <Box w="$20" h="$20" bg="$blue500" />
            </HStack>

            <Select>
              <Select.Trigger variant="outline" size="md">
                <Select.Input placeholder="Select option" />
                <Select.Icon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Backdrop />
                <Select.Content>
                  <Select.DragIndicatorWrapper>
                    <Select.DragIndicator />
                  </Select.DragIndicatorWrapper>
                  <Select.Item label="UX Research" value="ux" />
                  <Select.Item label="Web Development" value="web" />
                  <Select.Item
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <Select.Item
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <Select.Item label="Backend Development" value="backend" />
                </Select.Content>
              </Select.Portal>
            </Select>

            <Switch isDisabled={false} />

            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

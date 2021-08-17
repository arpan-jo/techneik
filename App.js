import React from 'react';
import {StyleSheet} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import RootNavigation from './src/navigation/navigation';

const App = () => {
  setTimeout(() => {
    RNBootSplash.hide();
  }, 2000);

  return (
    <>
      <RootNavigation />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

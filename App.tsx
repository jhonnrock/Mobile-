import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigation from './src/components/navigation/stackNavigation';
export const navigationRef=createNavigationContainerRef();

const App =() => {
  
  return (
      <NavigationContainer >
        <StackNavigation/>
      </NavigationContainer>
  );
};


export default App;

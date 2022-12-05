import React from 'react';
import {SafeAreaView,ScrollView} from 'react-native';
import {TEST_DATA} from './shared/Constants';
import {ItemsCard} from './components/ItemsList/ItemsCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {
          TEST_DATA.map((data, index) => {
            return <ItemsCard key={index} {...data} />
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ProgressModel} from '../../models/ProgressModel';

const ProgressBar = (props: ProgressModel) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 10,
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
    },
    progressBar: {
      flex: 1,
      width: `${props.progress}%`,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#005C5D', '#00A7A9', '#80DBDB']}
        useAngle={true}
        angle={90}
        locations={[0, 0.4, 1]}
        style={styles.progressBar}></LinearGradient>
    </View>
  );
};

export default ProgressBar;

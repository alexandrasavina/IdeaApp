import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ItemsHeaderModel} from '../../models/ItemsHeaderModel';
import ProgressBar from '../../shared/elements/ProgressBar';

export function ItemsHeader(header: ItemsHeaderModel) {
  return (
    <View>
      <View style={styles.InformationBlock}>
        <Image
          style={styles.InformationCheckCircle}
          source={require('../../shared/img/material-check-circle.png')} />
        <View style={styles.InformationTextBlock}>
          <Text style={styles.Title}>{header.label}</Text>
          <Text style={styles.SubTitle}>{header.subtitle}</Text>
        </View>
        <View style={styles.Button}>
          {
            header.open 
              ? (<Image source={require('../../shared/img/keyboardUpArrow.png')} />)
              : (<Image source={require('../../shared/img/keyboardDownArrow.png')}/>) 
          }
        </View>
      </View>
      <View style={styles.ProgressBarBlock}>
        <ProgressBar progress={header.progress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InformationBlock: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 90,
    backgroundColor: '#ECECEC',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  InformationCheckCircle: {
    width: 26,
    height: 26,
    marginRight: 10,
    alignSelf: 'center',
  },
  InformationTextBlock: {
    alignSelf: 'center',
  },
  Title: {
    fontSize: 14,
    margin: 2,
    fontFamily: 'OpenSans-Bold',
    fontWeight: '700',
    lineHeight: 19.07,
    color: '#2A6076',
  },
  SubTitle: {
    color: '#A4A4A4',
    margin: 2,
    fontSize: 12,
    lineHeight: 16.34,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
  },
  Button: {
    marginLeft: 'auto',
    alignSelf:'baseline',
    paddingTop: 10,
  },
  ProgressBarBlock: {
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ECECEC',
  },
});

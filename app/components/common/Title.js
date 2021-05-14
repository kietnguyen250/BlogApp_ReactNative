import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

const Title = ({children, numberOfLines = 2, size = 17}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{fontWeight: 'bold', fontSize: size}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});

export default Title;

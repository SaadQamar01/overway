import React from 'react';
import styles from './style';
import { View, Text } from 'react-native';

const UnderHeading = ({ heading1, heading2, isShowUnderline = true, large, isBold }) => {
  return (
    <View style={styles.headingContainer}>
      {heading1 && heading2 ? (
        <View style={styles.underlineContainer}>
          <View style={appStyles.flexRow}>
            <Text style={styles.heading1(large)}>{heading1}</Text>
            <Text style={styles.heading2(large)}>{heading2}</Text>
          </View>
          <View style={styles.underline} />
        </View>
      ) : (
        <>
          {heading1 && <Text style={styles.heading1(large, isBold)}>{heading1}</Text>}
          <View style={styles.underlineContainer}>
            {heading2 && <Text style={styles.heading2(large, isBold)}>{heading2}</Text>}
            {isShowUnderline && <View style={styles.underline} />}
          </View>
        </>
      )}
    </View>
  );
};

export default UnderHeading;

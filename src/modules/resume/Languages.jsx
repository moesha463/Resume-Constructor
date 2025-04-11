import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  rightColumnBlockTitle: {
    fontFamily: 'RobotoBold',
    fontSize: 8,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#777777',
    marginBottom: 3,
  },
  rightColumnBlockSemiText: {
    color: '#777777',
  },
});

const Languages = ({ title, languages }) => {
  return (
    <View>
      <Text style={styles.rightColumnBlockTitle}>
        {title} /
      </Text>

      <View>
        {languages.map((language) => (
          <Text style={styles.rightColumnBlockSemiText}>
            {language.name} ({language.level})
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Languages;

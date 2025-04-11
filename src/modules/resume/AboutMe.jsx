import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    // Main
    page: {
      fontFamily: 'RobotoRegular',
      padding: 30,
      paddingLeft: 50,
      paddingRight: 50,
      backgroundColor: '#ffffff',
      fontSize: 11,
      lineHeight: 1.4,
    },
    icon: {
      width: 15,
      height: 15,
      marginRight: 8,
    },
    // Header
    header: {
      width: 445,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
    },
    recruitImage: {
      width: 100,
      height: 100,
      border: '1px solid black',
      borderRadius: 100,
      overflow: 'hidden',
      margin: '0 auto 10px auto',
    },
    recruitName: {
      fontFamily: 'RobotoBold',
      fontSize: 24,
      marginBottom: 10,
    },
    recruitFirstName: {
      fontFamily: 'RobotoBold',
      fontSize: 24,
      marginBottom: 20,
    },
    recruitPosition: {
      fontSize: 14,
    },
    // Columns
    columns: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 40,
    },
    leftColumn: {
      width: 295,
    },
    columnBlockTitle: {
      fontFamily: 'RobotoBold',
      fontSize: 8,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: '#777777',
      marginBottom: 10,
    },
    rightColumn: {
      width: 150,
      display: 'flex',
      flexDirection: 'column',
      gap: 15,
    },
    rightColumnBlockInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
    },
    viewWithIcon: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    socialMedia: {
      color: 'black',
    },
    rightColumnBlockSemiText: {
      color: '#777777',
    },
    footerTitle: {
      fontFamily: 'RobotoBold',
      fontSize: 8,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: '#555555',
      marginBottom: 8,
    },
    footerText: {
      textAlign: 'justify',
    },
  });

const AboutMe = ({title, text}) => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerTitle}>
                {title} /
            </Text>

            <Text style={styles.footerText}>
                {text}
            </Text>
        </View>
    );
}

export default AboutMe;
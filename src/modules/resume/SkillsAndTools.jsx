import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    rightColumn: {
      width: 150,
      display: 'flex',
      flexDirection: 'column',
      gap: 15,
    },
    rightColumnBlockTitle: {
      fontFamily: 'RobotoBold',
      fontSize: 8,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: '#777777',
      marginBottom: 3,
    },
    rightColumnBlockSemiText: {
      color: '#777777'
    },
  });

const SkillsAndTools = ({title, skills}) => {
    return (
        <View style={styles.rightColumnBlock}>
            <Text style={styles.rightColumnBlockTitle}>
                {title} /
            </Text>

            <View>
                <Text style={styles.rightColumnBlockSemiText}>
                    {skills.join(', ')}
                </Text>
            </View>
        </View>
    );
}

export default SkillsAndTools;
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';

import robotoRegularSrc from '../../assets/fonts/Roboto-Regular.ttf';
import robotoSemiBoldSrc from '../../assets/fonts/Roboto-SemiBold.ttf';
import robotoBoldSrc from '../../assets/fonts/Roboto-Bold.ttf';

Font.register({
  family: 'RobotoRegular',
  src: robotoRegularSrc,
});
Font.register({
  family: 'RobotoSemiBold',
  src: robotoSemiBoldSrc,
});
Font.register({
  family: 'RobotoBold',
  src: robotoBoldSrc,
});

const styles = StyleSheet.create({
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
    objectFit: 'cover',
    objectPosition: 'center',
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
});

const Header = ({name, firstName, position, imageUrl}) => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.recruitName}>
                    {name}
                </Text>
                <Text style={styles.recruitFirstName}>
                    {firstName}
                </Text>
                <Text style={styles.recruitPosition}>
                    {position}
                </Text>
            </View>

            <View>
                <Image
                    style={styles.recruitImage}
                    src={imageUrl}
                />
            </View>
        </View>
    )
}

export default Header;
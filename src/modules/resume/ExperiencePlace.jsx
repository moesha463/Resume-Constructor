import {
    Text,
    View,
    StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    experiencePlace: {
        marginBottom: 20,
    },
    experiencePlaceTitle: {
        fontSize: 18,
        fontFamily: 'RobotoBold',
        marginBottom: 15,
    },
    experiencePlaceBlock: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        borderLeft: '1px solid black',
        paddingLeft: 15,
    },
    experiencePlaceSpeciality: {
        fontFamily: 'RobotoSemiBold',
    },
    experiencePlaceTime: {
        fontSize: 10,
        color: '#777777',
        marginBottom: 5,
    },
    experiencePlacePosition: {
        fontSize: 10,
    },
});

const ExperiencePlace = ({ title, specialty, time, position }) => {
    return (
        <View style={styles.experiencePlace}>
            <Text style={styles.experiencePlaceTitle}>
                {title}
            </Text>
            <View style={styles.experiencePlaceBlock}>
                <Text style={styles.experiencePlaceSpecialty}>
                    {specialty}
                </Text>
                <Text style={styles.experiencePlaceTime}>
                    {time}
                </Text>
                <Text style={styles.experiencePlacePosition}>
                    {position}
                </Text>
            </View>
        </View>
    )
}

export default ExperiencePlace;
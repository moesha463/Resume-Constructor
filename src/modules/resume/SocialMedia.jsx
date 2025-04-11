import {
    Text,
    View,
    StyleSheet,
    Link,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    icon: {
        color: 'black',
        width: 15,
        height: 15,
        marginRight: 8,
        objectFit: 'cover',
        objectPosition: 'center',
    },
    rightColumnBlockTitle: {
        fontFamily: 'RobotoBold',
        fontSize: 8,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: '#777777',
        marginBottom: 3,
    },
    rightColumnBlockInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    socialMedia: {
        color: 'black'
    },
});

const SocialMedia = ({ blockTitle, socials }) => {
    return (
        <View style={styles.rightColumnBlock}>
            <Text style={styles.rightColumnBlockTitle}>
                {blockTitle} /
            </Text>

            <View style={styles.rightColumnBlockInfo}>
                {socials.map((social) => (
                    <Link style={styles.socialMedia} src={social.url}>
                        {social.name}
                    </Link>
                ))}
            </View>
        </View>
    );
};

export default SocialMedia;

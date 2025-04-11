import {
    Text,
    View,
    StyleSheet,
    Image,
  } from '@react-pdf/renderer';
  
  const styles = StyleSheet.create({
    rightColumnBlock: {
      width: 150,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
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
    viewWithIcon: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    contactText: {
      color: 'black',
      fontSize: 10,
    },
    icon: {
      width: 15,
      height: 15,
      marginRight: 8,
    },
  });
  
  const Contacts = ({ title, contacts }) => {
    return (
      <View style={styles.rightColumnBlock}>
        <Text style={styles.rightColumnBlockTitle}>
          {title} /
        </Text>
  
        <View style={styles.rightColumnBlockInfo}>
          {contacts.map((contact, index) => (
            <View key={index} style={styles.viewWithIcon}>
              <Image
                style={styles.icon}
                src={
                  contact.type === 'phone'
                    ? 'https://cdn-icons-png.freepik.com/256/455/455705.png'
                    : 'https://cdn-icons-png.flaticon.com/512/542/542689.png'
                }
              />
              <Text style={styles.contactText}>{contact.value}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };
  
  export default Contacts;
  
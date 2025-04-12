import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Header, Contacts, SocialMedia, Languages, SkillsAndTools, ExperiencePlace, AboutMe } from '../modules/resume';
import robotoRegularSrc from '../assets/fonts/Roboto-Regular.ttf';
import robotoSemiBoldSrc from '../assets/fonts/Roboto-SemiBold.ttf';
import robotoBoldSrc from '../assets/fonts/Roboto-Bold.ttf';

Font.register({ family: 'RobotoRegular', src: robotoRegularSrc });
Font.register({ family: 'RobotoSemiBold', src: robotoSemiBoldSrc });
Font.register({ family: 'RobotoBold', src: robotoBoldSrc });

const styles = StyleSheet.create({
  page: {
    fontFamily: 'RobotoRegular',
    padding: 30,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#ffffff',
    fontSize: 11,
    lineHeight: 1.4,
  },
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
});

const Resume = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header 
        name={data?.header?.name || 'John'}
        firstName={data?.header?.firstName || 'Smith'}
        position={data?.header?.position || 'Front-end developer'}
        imageUrl={data?.header?.imageUrl || 'https://cdn-icons-png.freepik.com/512/64/64572.png'}
      />
      <View style={styles.columns}>
        <View style={styles.leftColumn}>
          <View>
            <Text style={styles.columnBlockTitle}>Work Experience</Text>
            {(data?.workExperiences || []).map((exp, index) => (
              <ExperiencePlace 
                key={index}
                title={exp.title}
                specialty={exp.specialty}
                time={exp.period || `${exp.startDate || 'N/A'} - ${exp.endDate || 'N/A'}`}
                position={exp.position}
              />
            ))}
          </View>
          <View>
            <Text style={styles.columnBlockTitle}>Education</Text>
            {(data?.education || []).map((edu, index) => (
              <ExperiencePlace 
                key={index}
                title={edu.title}
                specialty={edu.specialty}
                time={edu.graduationDate}
                position={edu.degree}
              />
            ))}
          </View>
        </View>
        <View style={styles.rightColumn}>
          <Contacts 
            title='Contacts'
            contacts={data?.contacts || [
              { type: 'phone', value: '+123456789' },
              { type: 'email', value: 'example@gmail.com' },
            ]}
          />
          <SocialMedia 
            blockTitle='Social Media'
            socials={data?.socialMedia || [
              { name: 'GitHub', url: 'https://github.com/moesha463' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/evgeniy-smirnov-787755257/' },
            ]}
          />
          <Languages 
            title='Languages'
            languages={data?.languages || [
              { name: 'Russian', level: 'C2' },
              { name: 'Belarusian', level: 'C2' },
              { name: 'English', level: 'B1' },
            ]}
          />
          <SkillsAndTools
            title='Skills'
            skills={data?.skills || ['git', 'C++', 'JavaScript']}
          />
          <SkillsAndTools
            title='Tools'
            skills={data?.tools || ['GitHub', 'VisualStudio', 'PyCharm']}
          />
        </View>
      </View>
      <AboutMe 
        title='About Me'
        text={data?.aboutMe || 'Lorem ipsum dolor sit amet'}
      />
    </Page>
  </Document>
);

export default Resume;
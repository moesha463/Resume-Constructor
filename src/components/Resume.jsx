import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import { Header, Contacts, SocialMedia, Languages, SkillsAndTools, ExperiencePlace, AboutMe } from '../modules/resume';

import robotoRegularSrc from '../assets/fonts/Roboto-Regular.ttf';
import robotoSemiBoldSrc from '../assets/fonts/Roboto-SemiBold.ttf';
import robotoBoldSrc from '../assets/fonts/Roboto-Bold.ttf';

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


const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header 
        name='John'
        firstName='Smith'
        position='Front-end developer'
        imageUrl='https://png.pngtree.com/png-clipart/20220509/original/pngtree-office-staff-working-in-company-building-png-image_7691146.png'
      />

      <View style={styles.columns}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {/* Work Experience */}
          <View>
            <Text style={styles.columnBlockTitle}>
              Work Experience /
            </Text>

            <ExperiencePlace 
              title='Альфа-Банк'
              specialty='Front-end Разработчик'
              time='Январь 2022 - Октябрь 2023'
              position='Junior'
            />
          </View>

          {/* Education */}
          <View>
            <Text style={styles.columnBlockTitle}>
              Education /
            </Text>

            <ExperiencePlace 
              title='БГТУ'
              specialty='Информационные Системы и Технологии'
              time='Сентябрь 2023 - Настоящее время'
              position='Бакалавр'
            />
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Contacts */}
          <Contacts 
            title='Contacts'
            contacts={[
              { type: 'phone', value: '+123456789' },
              { type: 'email', value: 'example@gmail.com' },
            ]}
          />

          {/* Social Media */}
          <SocialMedia 
            blockTitle='Social Media'
            socials={[
              {name: 'GitHub', url: 'https://github.com/moesha463'},
              {name: 'LinkedIn', url: 'https://www.linkedin.com/in/evgeniy-smirnov-787755257/'},
            ]}
          />

          {/* Languages */}
          <Languages 
            title='Languages'
            languages={[
              { name: 'Русский', level: 'C2' },
              { name: 'Белорусский', level: 'C2' },
              { name: 'Английский', level: 'B1' },
            ]}
          />

          {/* Skills */}
          <SkillsAndTools
            title='Skills'
            skills={['git', 'C++', 'JavaScript']}
          />

          {/* Tools */}
          <SkillsAndTools
            title='Tools'
            skills={['GitHub', 'VisualStudio', 'PyCharm']}
          />
        </View>
      </View>

      {/* About me */}
      <AboutMe 
        title='About Me'
        text='lorem ipsum dollar'
      />
    </Page>
  </Document>
);

export default Resume;

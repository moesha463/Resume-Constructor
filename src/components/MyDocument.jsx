import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Link,
} from '@react-pdf/renderer';

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
  icon: {
    color: 'black',
    width: 15,
    height: 15,
    marginRight: 8,
    objectFit: 'cover',
    objectPosition: 'center',
  },
  // Header
  header: {
    width: 445,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
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
  // Left Column
  leftColumn: {
    width: 295,
  },
  leftColumnBlock: {

  },
  columnBlockTitle: {
    fontFamily: 'RobotoBold',
    fontSize: 8,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#777777',
    marginBottom: 10,
  },
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
  // Right Column
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
  rightColumnBlockInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    },
  viewWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  socialMedia: {
    color: 'black'
  },
  rightColumnBlockSemiText: {
    color: '#777777'
  },
  // Footer
  footer: {

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
  }
});

const MyResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View>
          <Text style={styles.recruitName}>Евгений Смирнов</Text>
          <Text style={styles.recruitPosition}>Front-end Developer (React)</Text>
        </View>

        <View>
          <Image
            style={styles.recruitImage}
            src="https://images.icon-icons.com/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png" // Здесь можно указать URL или base64 строки с фотографией
          />
        </View>
      </View>

      <View style={styles.columns}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {/* Work Experience */}
          <View style={styles.leftColumnBlock}>
            <Text style={styles.columnBlockTitle}>
              Опыт Работы /
            </Text>

            <View style={styles.experiencePlace}>
              <Text style={styles.experiencePlaceTitle}>
                Яндекс
              </Text>
              <View style={styles.experiencePlaceBlock}>
                <Text style={styles.experiencePlaceSpeciality}>
                  Разработчик ПО
                </Text>
                <Text style={styles.experiencePlaceTime}>
                  Сентябрь 2023 - Январь 2025
                </Text>
                <Text style={styles.experiencePlacePosition}>
                  Middle
                </Text>
              </View>
            </View>

            <View style={styles.experiencePlace}>
              <Text style={styles.experiencePlaceTitle}>
                Т-Банк
              </Text>
              <View style={styles.experiencePlaceBlock}>
                <Text style={styles.experiencePlaceSpeciality}>
                  Front-end Разработчик
                </Text>
                <Text style={styles.experiencePlaceTime}>
                  Октябрь 2022 - Сентябрь 2023
                </Text>
                <Text style={styles.experiencePlacePosition}>
                  Junior
                </Text>
              </View>
            </View>
          </View>

          {/* Education */}
          <View style={styles.leftColumnBlock}>
            <Text style={styles.columnBlockTitle}>
              Образование /
            </Text>

            <View style={styles.experiencePlace}>
              <Text style={styles.experiencePlaceTitle}>
                БГТУ
              </Text>
              <View style={styles.experiencePlaceBlock}>
                <Text style={styles.experiencePlaceSpeciality}>
                  Информационные Системы и Технологии
                </Text>
                <Text style={styles.experiencePlaceTime}>
                  Сентябрь 2023 - Январь 2025
                </Text>
                <Text style={styles.experiencePlacePosition}>
                  Бакалавр
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Contacts */}
          <View style={styles.rightColumnBlock}>
            <Text style={styles.rightColumnBlockTitle}>
              Контакты /
            </Text>

            <View style={styles.rightColumnBlockInfo}>
              <View style={styles.viewWithIcon}>
                <Image style={styles.icon} src={'https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid'}/>
                <Text>
                  +375298459604
                </Text>
              </View>

              <View style={styles.viewWithIcon}>
                <Image style={styles.icon} src={'https://cdn-icons-png.flaticon.com/512/542/542689.png'}/>
                <Text>
                  smirnovzena463@gmail.com
                </Text>
              </View>
            </View>
          </View>

          {/* Social Media */}
          <View style={styles.rightColumnBlock}>
            <Text style={styles.rightColumnBlockTitle}>
              Соцсети /
            </Text>

            <View style={styles.rightColumnBlockInfo}>
              <View style={styles.viewWithIcon}>
                <Image style={styles.icon} src={'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png'}/>
                <Link style={styles.socialMedia} src='https://github.com/moesha463'>
                  GitHub
                </Link>
              </View>
              <View style={styles.viewWithIcon}>
                <Image style={styles.icon} src={'https://cdn-icons-png.flaticon.com/512/25/25320.png'}/>
                <Link style={styles.socialMedia} src='https://github.com/moesha463'>
                  LinkedIn
                </Link>
              </View>
            </View>
          </View>

          {/* Languages */}
          <View style={styles.rightColumnBlock}>
            <Text style={styles.rightColumnBlockTitle}>
              Языки /
            </Text>

            <View>
              <Text style={styles.rightColumnBlockSemiText}>
                Русский (C2 Proficiency)
              </Text>
              <Text style={styles.rightColumnBlockSemiText}>
                Белорусский (C2 Proficiency)
              </Text>
              <Text style={styles.rightColumnBlockSemiText}>
                Английский (B1 Intermediated)
              </Text>
            </View>
          </View>

          {/* Skills */}
          <View style={styles.rightColumnBlock}>
            <Text style={styles.rightColumnBlockTitle}>
              Навыки /
            </Text>

            <View>
              <Text style={styles.rightColumnBlockSemiText}>
                git, JavaScript, React,
                ReactRouter, ReactRedux, C#,
                Python, C++, MSQL Server,
                Oracle DB, Posgresql, Unity
              </Text>
            </View>
          </View>

          {/* Tools */}
          <View style={styles.rightColumnBlock}>
            <Text style={styles.rightColumnBlockTitle}>
              Инструменты /
            </Text>

            <View>
              <Text style={styles.rightColumnBlockSemiText}>
                Trello, GitHub, VisualStudio
                Code, VisualStudio 2022,
                PyCharm, WebStorm, Oracle SQL
                Developer, pgAdmin4, DataGrip
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* About me */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          Обо мне /
        </Text>
          
        <Text style={styles.footerText}>
          На данный момент я являюсь разработчиком веб-приложений на React, пишу простой frontend для сайтов,
          принимал участие в таком проекте как https://championships.by/, где помогал в разработке проекта, а
          именно: введение нового функционала, исправление чужого кода (так как некоторые компоненты были
          написаны участниками которые уже не анходились на проекте), фикс других мелких багов и помогал новым
          участникам проекта, для их быстрого старта и понимании в структуре проекта. Для распределения заданий
          использовался сервис Treello. В старших классах в течении 1.5 - 2 лет занимался разработкой игр на движке
          Unity, этим занимался я лично для себя. Учавствовал в GameJam`ах а так же помогал в разработке
          некоммерческих проектов. В текущее время занимаюсь разработкой Landing страниц на фриланс биржах.
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyResumeDocument;

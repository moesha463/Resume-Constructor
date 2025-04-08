import MyDocument from "./components/MyDocument";
import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  return (
    <>
      <PDFViewer width="50%" height="600px">
        <MyDocument />
      </PDFViewer>

      <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
        {({ loading }) => (loading ? 'Генерация PDF...' : 'Скачать PDF')}
      </PDFDownloadLink>
    </>
  );
}

export default App;

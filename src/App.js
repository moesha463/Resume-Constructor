import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <PDFViewer width="50%" height="600px">
        <Resume />
      </PDFViewer>

      <PDFDownloadLink document={<Resume />} fileName="example.pdf">
        {({ loading }) => (loading ? 'Генерация PDF...' : 'Скачать PDF')}
      </PDFDownloadLink>
    </>
  );
}

export default App;

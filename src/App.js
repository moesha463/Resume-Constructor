import React from 'react';
import { pdf } from '@react-pdf/renderer';
import Resume from './components/Resume';
import InputForm from './components/InputForm';

function App() {
  const handleFormSubmit = async (data) => {
    const blob = await pdf(<Resume data={data} />).toBlob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'resume.pdf';
    link.click();
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <div style={{ padding: '20px' }}>
      <InputForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
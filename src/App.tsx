import React, { useState } from "react";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function App() {

  
  const [url, setUrl] = React.useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
      const files = e.target.files;
      files.length > 0 && setUrl(URL.createObjectURL(files[0]));

  };

  return (
      <div>
          <input type="file" accept=".pdf" onChange={onChange} />

          <div className="mt4" style={{ height: '750px' }}>
              {url ? (
                  <div
                      style={{
                          border: '1px solid rgba(0, 0, 0, 0.3)',
                          height: '100%',
                      }}
                  >
                      <iframe src={url} height="1000" width="1500" title="Iframe Example"/>
                  </div>
              ) : (
                  <div
                      style={{
                          alignItems: 'center',
                          border: '2px dashed rgba(0, 0, 0, .3)',
                          display: 'flex',
                          fontSize: '2rem',
                          height: '100%',
                          justifyContent: 'center',
                          width: '100%',
                      }}
                  >
                      Preview area
                  </div>
              )}
          </div>
      </div>
  );
}

export default App;

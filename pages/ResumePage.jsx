import React from 'react'

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ResumePage = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
                <style jsx='true'>
            {`body{
                font-family: Helvetica;
                -webkit-font-smoothing: antialiased;
                background: rgba( 71, 147, 227, 1);
            }
            `}
            </style>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <div
                            style={{
                                height: '750px',
                                width: '900px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                        >
                            <Viewer fileUrl="/Resume.pdf" plugins={[defaultLayoutPluginInstance]} />
                        </div>
                    </Worker>
    </>
  )

}

export default ResumePage
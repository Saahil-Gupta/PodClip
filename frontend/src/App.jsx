import React from 'react';
import UploadForm from './components/UploadForm.jsx'

export default function App() {
    return ( 
        <div className="bg-gray-500 h-screen w-screen min-h-screen min-w-screen overflow-hidden">
          <div className="py-15">
            <h1 className="text-white text-2xl text-center text-bold p-5">Welcome to Pod Clip!!</h1>
            <h2 className="text-white text-xl text-center p-5">Your one stop solution for clipping podcasts</h2>
            <p className="text-amber-300 text-center p-3">Upload your locally downloaded Podcast file below</p>
            <div className="mx-auto max-w-sm items-center bg-grey rounded-lg bg-gray-400">
              <UploadForm />
            </div>
          </div>  
        </div>
    );
}

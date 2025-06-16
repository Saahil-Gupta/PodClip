import React from 'react';
import UploadForm from '../frontend/src/components/UploadForm.jsx'

export default function App() {
    return ( 
        <div className="bg-black max-w-screen max-h-screen">
            <h1 className="text-white text-2xl text-center text-bold p-5">Welcome to Pod Clip!!</h1>
            <h2 className="text-white text-xl text-center p-5">Your one stop solution for clipping podcasts</h2>
            <p className="text-amber-300 text-center p-3">Upload your locally downloaded Podcast file below</p>
            <UploadForm />
        </div>
    );
}

import React from 'react';

export default function UploadForm() {
    return ( 
        <div className="flex p-3">
            <form className="flex flex-col items-center">
                <input type="file" accept=".mp3, .wav, .m4a" className="mb-4 inline border border-gray-300 rounded items-center text-white" />
                <button type="submit" className="bg-gray-500 text-amber-200 px-4 py-2 rounded inline hover:bg-blue-500">Upload</button>
            </form>
        </div>
    );
}
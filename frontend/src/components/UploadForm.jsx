import React from 'react';

export default function UploadForm() {
    return ( 
        <div className="flex justify-items-center p-3">
            <form className="flex flex-col items-center">
                <input type="file" accept=".mp3, .wav, .m4a" className="mb-3 p-2 border border-gray-300 rounded" />
                <button type="submit" className="bg-blue-200 text-amber-200 px-4 py-2 rounded hover:bg-blue-200">Upload</button>
            </form>
        </div>
    );
}
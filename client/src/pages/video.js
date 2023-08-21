import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
import Navbar from '../components/NavBar';
const Video = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleTranscript = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/process_transcript', { transcript });
      console.log(response.data.result);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
    <Navbar/>
    <div className='flex flex-col items-center justify-center h-screen relative min-h-screen bg-cover bg-center bg'>
      <div className="w-150 h-150 mb-4 bg-white rounded-lg shadow-lg overflow-hidden my-14 vid border-amber-500">
        <iframe className='w-150 h-150'
          title="Webcam Feed"
          src="http://127.0.0.1:5000/video_feed"
          width="640"
          height="480"
        />
      </div>
      <p className="bg-gray-100 rounded-lg shadow-lg p-4 text-black">{transcript}</p>
      <p className='bg-white text-black px-5 rounded-md my-5'  >Microphone: {listening ? 'on' : 'off'}</p>
      <div className='flex flex-row gap-x-6'>
        <button className='bg-white text-black px-5 rounded-md my-5' onClick={SpeechRecognition.startListening}>Start</button>
        <button className='bg-white text-black px-5 rounded-md my-5' onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className='bg-white text-black px-5 rounded-md my-5' onClick={resetTranscript}>Reset</button>
      </div>
      <button className='bg-white text-black px-5 rounded-md my-5' onClick={handleTranscript}>Evalute</button>
    </div>
    </>
  );
};



export default Video;

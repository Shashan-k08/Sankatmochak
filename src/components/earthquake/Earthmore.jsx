import React, { useState } from 'react';
import './Earthquake.css'
const Earthmore = () => {
  const [recording, setRecording] = useState(false);
  const [stream, setStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioData, setAudioData] = useState(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(stream);

      const mediaRecorder = new MediaRecorder(stream);
      setMediaRecorder(mediaRecorder);

      const chunks = [];
      mediaRecorder.addEventListener("dataavailable", event => {
        chunks.push(event.data);
      });

      mediaRecorder.addEventListener("stop", () => {
        const blob = new Blob(chunks, { type: "audio/mp3" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
          setAudioData({ audio: base64String });
        };
      });

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    stream.getTracks().forEach(track => track.stop());
    setRecording(false);
  };

  const sendAudioData = () => {
    // Send the audio data as JSON
    fetch("https://example.com/api/endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(audioData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <button onClick={recording ? stopRecording : startRecording} className="record-button">
        {recording ? "Stop Recording" : "Start Recording"}
      </button>
      {audioData && (
        <div>
          <audio controls src={`data:audio/mp3;base64,${audioData.audio}`} />
          <button onClick={sendAudioData}>Send Audio Data</button>
        </div>
      )}
    </div>
  );
};

export default Earthmore;

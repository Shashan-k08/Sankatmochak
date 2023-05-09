import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'
import { useState, useEffect } from 'react';
import './Info.css'
const Info = (props) => {
    const [currentPosition, setCurrentPosition] = useState(null);
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
    props.showalert(" Media file shared and Message Sent Successfully !", "success")
    // Send the audio data as JSON
    // fetch("https://example.com/api/endpoint", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(audioData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    //   props.showalert("Message Sent Successfully", "success")
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  };
  const sendAudioData1 = ()=>{
    alert('Media file shared and message send successfully !')
  }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCurrentPosition(position);
                console.log(position)

            },
            (error) => {

                console.log(error);
            }
        );
    }, [])

    return (
        <div class="container4" >
           
            <div className="container5">
                <div class="info-heading">
                    <h2>Update News Alert and Information of your area</h2>
                </div>

                <div className="voice-box">
<h5>Wants to send the voice message</h5>
<div>
      <button onClick={recording ? stopRecording : startRecording} className="record-button">
        {recording ? "Stop Recording" : "Start Recording"}
      </button>
      {audioData && (
        <div className='fl-c'>
          <audio controls src={`data:audio/mp3;base64,${audioData.audio}`} />
          <button className ="audio-send"onClick={sendAudioData}>Send Audio Data</button>
        </div>
      )}
    </div>
                </div>
          <h6>Or( type manually)</h6>
                <form className='info-box-form'>

                    <div class="info-form-input">

                        <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" required="" />

                    </div>
                    <div class="info-form-input">

                        <input name="email" type="text" class="form-control" id="email" placeholder="Your email" required="" />

                    </div>
                    <div class="info-form-message">

                        <textarea name="message" class="form-control" id="Subject" placeholder="Subject"
                            required=""></textarea>

                        <h6> Upload the information in pdf or docx format only</h6>

                        <input name="Upload Saved Replay" type="file" accept="application/pdf,application/msword,
                application/vnd.openxmlformats-officedocument.wordprocessingml.document" />

                    </div>
                    <div class="info-form-button">

                        <button onClick={sendAudioData1} type="submit" id="form-submit" class="info-box-form-button">Send Message Now</button>

                    </div>

                </form>
            </div>

         
        </div >
    )
}

export default Info
import {useState } from 'react';
import Button from '@mui/material/Button';
import VideoCall from './components/VideoCall';
import ChannelForm from './components/ChannelForm';
import "./App.css"

const App = () => {
  const [inCall, setInCall] = useState(false);
  // const [channelName, setChannelName] = useState("")
  return (
      <div className="App" style={{ height: "100%" }}>
        <h1 className="heading">Agora RTC NG SDK React Wrapper</h1>
        {inCall ? (
          <VideoCall setInCall={setInCall}/>
        ) : (
          // <ChannelForm setInCall={setInCall} 
          // setChannelName={setChannelName} 
          // />
          <Button
          variant="contained"
          color="primary"
          onClick={() => 
              setInCall(true)
          }>
          Join Call
        </Button>
        )}
    </div>
  )
}

export default App;
import {config} from '../settings'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const ChannelForm = (props) => {
    const { setInCall, setChannelName } = props;
    
    const handleSubmit = e =>{
        console.l0g('Handle submit Ran');
        e.preventDefault();
    }
    return (
      <div>
      {/* // <form className="join" onSubmit={handleSubmit}> */}
      {/* {config.appId === '' && <p style={{color: 'red'}}>Please enter your Agora App ID in App.tsx and refresh the page</p>}
        <TextField type="text"
          placeholder="Enter Channel Name"
          onChange={(e) => setChannelName(e.target.value)}
        /> */}
        <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
                e.preventDefault();
                setInCall(true);
            }}>
            Join Call
        </Button>
      {/* // </form> */}
      </div>
    );
  };
  
  export default ChannelForm;
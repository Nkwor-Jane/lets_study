//takes care of video rendering controls
import React, {useState, useEffect} from 'react';
import {
        channelName, 
        config, 
        useClient, 
        useMicrophoneAndCameraTracks
} from '../settings.jsx';
import Grid from '@mui/material/Grid';
import Video from './Video.jsx';
import Controls from './Controls.jsx';

const VideoCall = (props) => {
    const {setInCall} = props;
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const client = useClient()
    const {ready, tracks} = useMicrophoneAndCameraTracks();

    useEffect(() => {
        let init = async (name) => {
            client.on("user-published", async (user, mediaType) => {
              await client.subscribe(user, mediaType);
              if (mediaType === "video") {
                setUsers((prevUsers) => {
                  return [...prevUsers, user];
                });
                }
                if (mediaType === "audio") {
                    //Take note of optional chaining in case of error, try removing it
                    user.audioTrack?.play();
                }
            });
            //Youtube video used "mediType", Agora github example use "type" --- following youtube vieo till error arises
            client.on("user-unpublished", (user, mediaType) => {
                console.log("unpublished", user, mediaType);
                if (mediaType === "audio") {
                    //Take note of optional chaining in case of error, try removing it
                    if (user.audioTrack) user.audioTrack.stop();
                }
                if (mediaType === "video") {
                    setUsers((prevUsers) =>{
                        return prevUsers.filter((User) => User.uid != user.uid);
                    });
                }
            });

            client.on("user-left", (user) =>{
                console.log("leaving", user);
                setUsers((prevUsers) =>{
                    return prevUsers.filter((User) => User.uid !== user.uid);
                });
            });

            try {
                await client.join(config.appId, name, config.token, null);
            } catch (error) {
                console.log("error")
            }
            if (tracks) await client.publish([tracks[0], tracks[1]]);
            setStart(true);
        };

        if (ready && tracks) {
            try {
                console.log("init ready")
                init(channelName);
            } catch (error) {
                console.log(error)
            }
        }
    }, [channelName, client, ready, tracks]);
    return (
        <Grid container direction="column"  style={{height:"100%"}}>
            <Grid item style={{height:"5%"}}>
                {ready && tracks && (
                    <Controls tracks={tracks} setStart={setStart} setInCall={setInCall}/>
                )}
            </Grid>
            <Grid item style={{height:"95%"}}>
            {start && tracks && <Video tracks={tracks} users={users}/>}
            </Grid>
        </Grid>
    )
}

export default VideoCall;
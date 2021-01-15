import './App.css';
import Streambar from './components/Streambar/streambar.jsx';
import Medias from './components/Medias/medias';
import Datetime from './components/Datetime/datetime';

import {TwitchHook} from './hooks/Twitch/twitch.jsx';

import  youtubeIcon from './assets/youtube.png';
import twitterIcon from './assets/twitter.png';
import spotifyIcon from './assets/spotify.png';

function App() {

  return (
    <TwitchHook>
      {({viewerCount}) => (
        <Streambar nickname="Vitalis" 
        viewerCount={viewerCount} 
        lastSub="Michel"
        lastFollow ="Guy"
        >
        <Medias
        title="youtube"
        icon={youtubeIcon}
        color="#e74c3c"
        name="VITALIS"
        desc="Les VOD du potiron"
        />
        <Medias
          title="twitter"
          icon={twitterIcon}
          color="#1DA1F2"
          name="VitalisDu33"
          desc="1 Follow = 1 Potiron"
        />
        <Medias
          title="Spotify"
          icon={spotifyIcon}
          color="#1DB954"
          name="DJ Vitalis"
          desc="La playlist des potirons"
        />
        <Datetime/>
      </Streambar>
      )}
    </TwitchHook>
  );
}

export default App;

const {useEffect, useState } = require('react');

const clientID ='yo39utqyux9ec50zav777htux8wxuh';
const redirectURI ='http://localhost:3000';
const responseType ='token';
const scopes ='channel:read:subscriptions';

const getToken = (responseUrl)=> {
  const searchParams = new URLSearchParams(responseUrl.split('#')[1]);
  return searchParams.get('access_token');
}

const handleLogin = () => {

}
const TwitchHook = ({children})=> {

  useEffect(() => {

    const token = getToken(window.location.href) || localStorage.getItem('token');
    localStorage.setItem('token', token);
    //console.log(token);
    if(!token){

      const loginSearchParams = new URLSearchParams('')

      loginSearchParams.append('client_id', clientID);
      loginSearchParams.append('redirect_uri', redirectURI);
      loginSearchParams.append('response_type', responseType);
      loginSearchParams.append('scope', scopes);

      window.location.href = `https://id.twitch.tv/oauth2/authorize?${loginSearchParams}`
    }
  }, []);

  const [infos, setInfos] = useState({ viewerCount : 42});
  
  return children({...infos})
}

export {TwitchHook};
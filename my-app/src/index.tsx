import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowPost from "./component/post/post";
import ToolBar from './component/toolbar/toolbar';
import Click from "./component/button/button";
import ShowProfile from "./component/profile/profile";

ReactDOM.render(
  <React.StrictMode>
    {/* <ShowPost imgProfileURL='lol' profileName='lol' profileID={1} postTitle='lol' postMessage='lol' /> */}
    <ToolBar appTitle="POSTNET" />
    {/* <Click/> */}
    {/* <ShowProfile imgProfileURL='URL for Image Profile' profileName='PIIIEEERRREE' profileID={2} profileMessage='ça se prononce gui' usrMood="Tout le monde s'appelle Pierre ici ?"/> */}
    {/* <ShowPost imgProfileURL='lol' profileName='lol' profileID={1} postTitle='lol' postMessage='lol' /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

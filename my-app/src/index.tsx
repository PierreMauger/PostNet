import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowPost from "./component/post/post"
//import './component/profile/profile.css'

ReactDOM.render(
    <React.StrictMode>
        <ShowPost imgProfileURL='lol' profileName='lol' profileID={1} postTitle='lol' postMessage='lol'/>
    </React.StrictMode>,
  document.getElementById('root')
);

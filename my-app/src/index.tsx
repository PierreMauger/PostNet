import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowPost from "./component/post/post"
import ToolBar from './component/toolbar/toolbar';

ReactDOM.render(
  <React.StrictMode>
    {/* <ShowPost imgProfileURL='lol' profileName='lol' profileID={1} postTitle='lol' postMessage='lol' /> */}
    <ToolBar appTitle="POSTNET" imgProfileURL="lol" />
  </React.StrictMode>,
  document.getElementById('root')
);

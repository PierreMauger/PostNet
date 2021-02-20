import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowPost from "./component/post/post";
import ToolBar from './component/toolbar/toolbar';
import Click from "./component/button/button";

ReactDOM.render(
  <React.StrictMode>
    {/* <ShowPost imgProfileURL='lol' profileName='lol' profileID={1} postTitle='lol' postMessage='lol' /> */}
    {/* <ToolBar appTitle="POSTNET" imgProfileURL="lol" /> */}
    <Click/>
  </React.StrictMode>,
  document.getElementById('root')
);

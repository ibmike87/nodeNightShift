import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';        //만든 컴포넌트를 불러올 때
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));      //만든 컴포넌트를 브라우저 상에 그릴때 사용 (렌더링 할 결과물, 컴포넌트를 그릴 대상 DOM)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

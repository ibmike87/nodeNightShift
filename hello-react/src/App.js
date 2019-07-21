import React from 'react';  //JSX 에서 react 를 불러오려면 'react'를 꼭 import 해야 한다.
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render (){
    const style = {
      backgroundColor : "black",
      padding : '16px',
      color : "white",
      fontSize : "12px"
    };

    return (
      <fragment>
        <div className="App" style={style}>
          Hello World
        </div>
      </fragment>
    )
  }
}

// function App() {        // <--컴포넌트를  CLASS 로 만들거나  함수로 만들거나 
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

export default App;   //작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기

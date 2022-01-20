import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './style.css';
import Cards from './Card';

export default function App() {
  let compArr = [
    'card',
    'Chips',
    'drawer',
    'header',
    'badge',
    'snackbar',
    'dialogs',
    'tabs',
  ];
  const [currentComp, setCurrentComp] = React.useState(compArr[0]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
       <FaHeart />
      <p>Start editing to see some magic happen :)</p>
      {currentComp === 'card' ? <Cards /> : null}
    </div>
  );
}

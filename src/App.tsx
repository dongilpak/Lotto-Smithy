import React from 'react';
import './App.css';
import CreateLotto from './Components/CreateLotto/CreateLotto';
import ListOfLotto from './Components/ListOfLotto/ListOfLotto';
import LottoResult from './Components/LottoResult/LottoResult';
import Suggestion from './Components/Suggestion/Suggestion';
import Title from './Components/Title/Title';

const App = () => {
    return (
        <div className='container'>
            <Title />
            <LottoResult />
            <CreateLotto />
            <ListOfLotto />
            <Suggestion />
        </div>
    );
};

export default App;

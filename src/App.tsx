import React from 'react';
import './App.css';
import CreateLotto from './Components/CreateLotto/CreateLotto';
import LottoResult from './Components/LottoResult/LottoResult';
import Title from './Components/Title/Title';

const App = () => {
    return (
        <div className='container'>
            <Title />
            <LottoResult />
            <CreateLotto />
        </div>
    );
};

export default App;

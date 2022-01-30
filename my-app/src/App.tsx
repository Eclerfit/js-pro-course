
import React from 'react';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  const listItems1 = [
    '1 visit – 12 BYN/month', 
    '4 visits – 42 BYN/month', 
    '6 visits – 63 BYN/month', 
    '8 visits – 82 BYN/month',
    '12 visits – 95 BYN/month',
    'Unlimited – 120 BYN/month',
  ]
  const listItems2 = [
    '1 visit – 10 BYN/month', 
    '4 visits – 38 BYN/month', 
    '6 visits – 55 BYN/month', 
    '8 visits – 65 BYN/month',
    '12 visits – 80 BYN/month',
    'Unlimited – 100 BYN/month',
  ]

  return (
    
    <div className="App">
      <Header />
      <div className='App-cards'>
      <div className='App-card'>
      <CardList items={listItems1} />
      <Button />
      </div> 
      <img src={require('./img/workout.png')} alt='workout' className="workout__img" />
      <div className='App-card'>
      <CardList items={listItems2} /> 
      <Button />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

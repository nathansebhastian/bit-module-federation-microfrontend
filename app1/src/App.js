import React from 'react';
import Card from '@bit/nsebhastian.design-system.card';

const App = props => {
  const buttonClick = () => {
    const onClick = props.onClick;
    if (onClick) {
      onClick();
    } else {
      console.log('button is clicked');
    }
  };
  return (
    <div style={{padding: '50px 12px', display: 'flex'}}>
      <Card
        image='https://firebasestorage.googleapis.com/v0/b/react-firebase-basic.appspot.com/o/hotel1.jpg?alt=media&token=e1ffa47a-268a-42a1-8da4-8b954b9ffaa9'
        title='Hotel 1'
        buttonTitle='Book'
        buttonClick={() => buttonClick()}
      />
      <Card
        image='https://firebasestorage.googleapis.com/v0/b/react-firebase-basic.appspot.com/o/hotel2.jpg?alt=media&token=45ec4e54-d2fe-442f-8b02-a841200c7f54'
        title='Hotel 2'
        buttonTitle='Book'
        buttonClick={() => buttonClick()}
      />
      <Card
        image='https://firebasestorage.googleapis.com/v0/b/react-firebase-basic.appspot.com/o/hotel3.jpg?alt=media&token=6d10b7d1-e2b8-4c0a-bd7b-c4212530bc43'
        title='Hotel 3'
        buttonTitle='Book'
        buttonClick={() => buttonClick()}
      />
    </div>
  );
};

export default App;

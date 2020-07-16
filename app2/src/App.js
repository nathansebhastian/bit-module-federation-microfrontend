import React from 'react';

const PrimeReactStyle = React.lazy(() => import('app1/PrimeReactStyle'));
const Header = React.lazy(() => import('app1/Header'));
const Card = React.lazy(() => import('app1/Card'));
const Button = React.lazy(() => import('app1/Button'));

const header = (
  <div style={{textAlign: 'center'}}>
    <React.Suspense fallback='Loading header'>
      <Header>Hello this is App 2</Header>
    </React.Suspense>
  </div>
);
const footer = (
  <span>
    <React.Suspense fallback='Loading buttons'>
      <Button label='Save' icon='pi pi-check' style={{marginRight: '.25em'}} />
      <Button label='Cancel' icon='pi pi-times' className='p-button-secondary' />
    </React.Suspense>
  </span>
);

export default () => (
  <div style={{margin: '20px'}}>
  <React.Suspense fallback='Loading style'>
    <PrimeReactStyle />
  </React.Suspense>
    <div style={{width: 400}}>
    <React.Suspense fallback='Loading card'>
      <Card footer={footer} header={header}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </Card>
    </React.Suspense>
    </div>
  </div>
);

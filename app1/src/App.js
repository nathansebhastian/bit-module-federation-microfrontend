import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Header from './components/Header';
import Panel from './components/Panel';
import PrimeReactStyle from './components/PrimeReactStyle';

const header = <div style={{textAlign: 'center'}}><Header>Card example</Header></div>;
const footer = (
  <span>
    <Button label='Save' icon='pi pi-check' style={{marginRight: '.25em'}} />
    <Button label='Cancel' icon='pi pi-times' className='p-button-secondary' />
  </span>
);

export default () => (
  <div style={{margin: '20px'}}>
    <Header>Header example</Header>
    <PrimeReactStyle />
    <div style={{width: 400}}>
      <Card footer={footer} header={header}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </Card>
    </div>
    <div className='content-section introduction'>
      <div className='feature-intro'>
        <Header>Panel example</Header>
        <p>
          Panel is a grouping component providing with content toggle feature.
        </p>
      </div>
    </div>

    <div className='content-section implementation'>
      <Panel header='Godfather I'>
        The story begins as Don Vito Corleone, the head of a New York Mafia
        family, oversees his daughter's wedding. His beloved son Michael has
        just come home from the war, but does not intend to become part of his
        father's business. Through Michael's life the nature of the family
        business becomes clear. The business of the family is just like the head
        of the family, kind and benevolent to those who give respect, but given
        to ruthless violence whenever anything stands against the good of the
        family.
      </Panel>
      <Panel header='Godfather I' style={{marginTop: '2em'}} toggleable={true}>
        The story begins as Don Vito Corleone, the head of a New York Mafia
        family, oversees his daughter's wedding. His beloved son Michael has
        just come home from the war, but does not intend to become part of his
        father's business. Through Michael's life the nature of the family
        business becomes clear. The business of the family is just like the head
        of the family, kind and benevolent to those who give respect, but given
        to ruthless violence whenever anything stands against the good of the
        family.
      </Panel>
    </div>
    
  </div>
);

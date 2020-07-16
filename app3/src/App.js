import React from 'react';

const PrimeReactStyle = React.lazy(() => import('app1/PrimeReactStyle'));
const Panel = React.lazy(() => import('app1/Panel'));
const Header = React.lazy(() => import('app1/Header'));

export default () => (
  <div style={{margin: '20px'}}>
    <React.Suspense fallback='Loading style'>
      <PrimeReactStyle />
    </React.Suspense>
    <div className='content-section introduction'>
      <div className='feature-intro'>
        <React.Suspense fallback='Loading header'>
          <Header>App3 - Panel</Header>
        </React.Suspense>
        <p>
          Panel is a grouping component providing with content toggle feature.
        </p>
      </div>
    </div>

    <div className='content-section implementation'>
      <React.Suspense fallback='Loading panels'>
        <Panel header='The Godfather I'>
          The story begins as Don Vito Corleone, the head of a New York Mafia
          family, oversees his daughter's wedding. His beloved son Michael has
          just come home from the war, but does not intend to become part of his
          father's business. Through Michael's life the nature of the family
          business becomes clear. The business of the family is just like the
          head of the family, kind and benevolent to those who give respect, but
          given to ruthless violence whenever anything stands against the good
          of the family.
        </Panel>
        <Panel
          header='The Godfather II'
          style={{marginTop: '2em'}}
          toggleable={true}>
          The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.
        </Panel>
      </React.Suspense>
    </div>
  </div>
);

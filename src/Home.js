import React from 'react';
import Card from './Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({ property, index }) => (
  <div className="page">
    <TransitionGroup className="card-container">
      <CSSTransition
        key={index}
        timeout={4500}
        classNames="slide"
      >
        <Card property={property} />
      </CSSTransition>
    </TransitionGroup>

  </div>
)


export default Home;
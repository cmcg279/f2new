import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, CardDeck } from 'reactstrap';

const Testimonials = (props) => {
  return (
    <div>
<CardDeck>
      <Card>
        <CardBody>
          <CardTitle>Joe and Anne</CardTitle>
          <CardSubtitle>Belfast</CardSubtitle>
          <CardText>My wife and I have had hardwood floors throughout the entire house. We have put off having them refinihed because we deated the dus and the mess of the process. Thankfully we heard about Floors 2 New and now the floors look fantastic, there was virtually no mess during the process</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Tom and Julie</CardTitle>
          <CardSubtitle>Dublin</CardSubtitle>
          <CardText>Paul worked magic on our worn wood floors. With virtually no dust, the rebirth of our wooden floors was hassle free and without problems.</CardText>
        </CardBody>
      </Card>
</CardDeck>
    </div>
  );
};

export default Testimonials;

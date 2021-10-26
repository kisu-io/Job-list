import React from 'react';
import {Card} from 'react-bootstrap';

const JobCard = ({data}) => {
  return (
    <Card style={{'margin-top': '2rem', 'margin-bottom': '2rem'}}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <strong>Remote:</strong> {data.remote ? 'Yes' : 'No'}
        </Card.Subtitle>
        <Card.Text>
          <strong>Description:</strong> {data.description}
        </Card.Text>
        <Card.Text href="#">
          <strong>Location: </strong>
          {data.city}
        </Card.Text>
        <Card.Link href="#">Apply Now!</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default JobCard;

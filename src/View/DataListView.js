import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import moment from 'moment';

const StyledCard = styled(Card)`
  margin: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const CardBody = styled(Card.Body)`
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled(Card.Title)`
  text-align: center;
`;

const CardText = styled(Card.Text)`
  text-align: center;
`;

const CardImg = styled(Card.Img)`
  margin-top: 20px;
  align-self: center;
  height: 80%;
  width: 80%;
`;

const DataListView = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="container mt-4">
      <Row xs={1} md={2} lg={3} className="g-4">
        {data.map((item) => (
          <Col key={item.id} onClick={() => handleCardClick(item.id)}>
            <StyledCard>
              <CardImg variant="top" src={item?.image} alt={item?.name} />
              <CardBody>
                <CardTitle>{item?.name}</CardTitle>
                <CardText>
                  <strong>Production Date:</strong> {moment(item?.productionDate).format('DD-MM-YYYY')}
                </CardText>
                <CardText>
                  <strong>Expiry Date:</strong> {moment(item?.expiryDate).format('DD-MM-YYYY')}
                </CardText>
              </CardBody>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DataListView;

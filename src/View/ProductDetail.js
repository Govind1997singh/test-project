import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import moment from 'moment';
import { FaEdit } from 'react-icons/fa';

const StyledCard = styled(Card)`
    margin: 15px;
    border: 0px solid #ddd;
    border-radius: 10px;
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
    height: 150px;
    width: 150px;
`;

const EditableField = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
`;

const InputField = styled.input`
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const EditIcon = styled(FaEdit)`
    cursor: pointer;
    color: #007bff;
    margin-bottom:10px;
`;

const ProductDetailView = ({ item, editingField, newDate, setNewDate, handleEditClick, handleSave }) => {
    return item ? (
        <StyledCard>
            <CardImg variant="top" src={item?.image} alt={item?.name} />
            <CardBody>
                <CardTitle>{item?.name}</CardTitle>
               
                    <EditableField>
                        <p><strong>Production Date:</strong></p>
                        {editingField === 'productionDate' ? (
                            <>
                                <InputField
                                    type="date"
                                    
                                    value={newDate}
                                    onChange={(e) => setNewDate(e.target.value)}
                                />
                                <button onClick={() => handleSave('productionDate')}>Save</button>
                            </>
                        ) : (
                            <>
                                <p>{moment(item.productionDate).format('DD-MM-YYYY')}</p>
                                <EditIcon onClick={() => handleEditClick('productionDate')} />
                            </>
                        )}
                    </EditableField>
                
                    <EditableField>
                        <p><strong>Expiry Date:</strong></p>
                        {editingField === 'expiryDate' ? (
                            <>
                                <InputField
                                    type="date"
                                    value={newDate}
                                    onChange={(e) => setNewDate(e.target.value)}
                                />
                                <button onClick={() => handleSave('expiryDate')}>Save</button>
                            </>
                        ) : (
                            <>
                                <p>{moment(item.expiryDate).format('DD-MM-YYYY')}</p>
                                <EditIcon onClick={() => handleEditClick('expiryDate')} />
                            </>
                        )}
                    </EditableField>
            </CardBody>
        </StyledCard>
    ) : (
        <p>Item not found.</p>
    );
};

export default ProductDetailView;
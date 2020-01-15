import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 2% 2.5%;
`;

const HeaderImg = styled.img.attrs({
    src: props => props.src
})`
width: 100%;
height: 300px;
`;

const Title = styled.h3`
    color: black;
    font-size: 1.5rem;
    font-weight: 400;
`;

const SubHeading = styled.h3`
    color: grey;
    margin-top: 5px;
    font-size: 0.7rem;
    font-weight: 400;
`;

const Price = styled.h3`
    color: black;
    font-size: 1rem;
    font-weight: 400;
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

const Button = styled.button`
  color: green;
  font-size: 1em;
  padding: 0.25em 2em;
  border: 2px solid green;
  border-radius: 1px;
`;

const MultiButtonView = styled.div`
    border: 2px solid green;
    border-radius: 1px;
`;

const ClearButton = styled.button`
  color: green;
  font-size: 1em;
  padding: 0.25em 1em;
`;

const Item = ({place, addItem, removeItem, index}) => {
    return(
        <Card>
            <HeaderImg src={place.image} />
            <SubHeading>FESTIVE SPECIALS</SubHeading>
            <Title>{place.name}</Title>
            <Bottom>
                <Price>	&#8377; {place.price}</Price>
                {place.itemCount === 0 && (
                    <Button onClick={() => {addItem(index);}}>ADD</Button>
                ) || (
                    <MultiButtonView>
                        <ClearButton onClick={() => {
                            removeItem(index);
                        }}>-</ClearButton>
                        {place.itemCount}
                        <ClearButton onClick={() => {
                            addItem(index);
                        }}>+</ClearButton>
                    </MultiButtonView>
                )}
            </Bottom>
        </Card>
    );
};

export default Item;

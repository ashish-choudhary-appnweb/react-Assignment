import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 5px 20px;
    border: 1px solid #ccc;
    font-family: 'Open Sans', sans-serif;
`;

const Title = styled.h3`
    color: black;
    font-size: 0.7rem;
    font-weight: 400;
`;

const TopBar = ({title = 'Recommended'}) => (
    <Container>
        <Title>
            {title}
        </Title>
    </Container>
);

export default TopBar;

import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaArrowLeft, FaHeart } from 'react-icons/fa';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 10%;
    font-family: 'Open Sans', sans-serif;
`;

const Icon = styled.div`
    padding: 0 10px;
`;

const Title = styled.h3`
    color: black;
    font-size: 1.2rem;
    font-weight: 700;
`;

const SubTitle = styled.h6`
    color: black;
    font-size: 0.7rem;
`;

const Body = styled.div`
    padding: 0 10px;
    flex: 1;
`;

const Header = ({title = 'THE BOWL COMPANY', subtitle = '30 mins'}) => (
    <Container>
        <Icon>
            <FaArrowLeft/>
        </Icon>
        <Body>
            <Title>
                {title}
            </Title>
            <SubTitle>
                {subtitle}
            </SubTitle>
        </Body>
        <Icon>
            <FaHeart/>
        </Icon>
        <Icon>
            <FaSearch/>
        </Icon>
    </Container>
);

export default Header;

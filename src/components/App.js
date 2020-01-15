import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
// import {Container, Row, Col} from 'react-bootstrap';
import {onAppBootstrap, updateCart, resetCart, appBootstrap} from '../actions';
import Header from './Header';
import TopBar from './TopBar';
import Item from './Item';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 2.5%;
    padding-bottom: 10%;
`;

const BottomBar = styled.div`
    position: fixed;
    background-color: green;
    height: 10%;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h3`
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
`;

const CartButton = styled.button`
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
`;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu: [],
            totalAmount: 0,
            totalItems: 0,
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.places !== state.menu) {
            return {
                menu: props.places,
                totalAmount: props.cart.totalAmount,
                totalItems: props.cart.totalItems,
            };
        }
        return null;
    }

    componentDidMount = async () => {
        const { menu } = this.state;
        if(!menu.length){
            await this.props.onAppBootstrap();
        }
    }

    checkUpdateCart(menu) {
        const { props } = this;
        let shouldUpdateCart = false;
        let totalAmount = 0;
        let totalItems = 0;
        menu.map((item) => {
            if (item.itemCount > 0) {
                totalItems += item.itemCount;
                totalAmount += item.itemCount * item.price;
                shouldUpdateCart = true;
            }
        });
        props.appBootstrap(menu);
        if (shouldUpdateCart === true) {
            props.updateCart({ menu, totalAmount, totalItems });
        } else {
            props.resetCart();
        }
        this.setState({ menu, totalAmount, totalItems });
    }

    addItem(index) {
        const { menu } = this.state;
        menu[index].itemCount += 1;
        this.checkUpdateCart(menu);
    }
    
    removeItem(index) {
        const { menu } = this.state;
        if (menu[index].itemCount > 0) {
            menu[index].itemCount -= 1;
            this.checkUpdateCart(menu);
        }
    }

    render(){
        const { menu, totalItems, totalAmount } = this.state;
        const menus = menu.map((place, index) => {
            return (
                <Item key={`${place.id}`} index={index} place={place} removeItem={this.removeItem} addItem={this.addItem} />
            );
        });
        return (
            <Container>
                <Header/>
                <TopBar />
                <Wrapper>
                    {menus}
                </Wrapper>
                {totalItems !== 0 && (
                    <BottomBar>
                        <Title>{totalItems} Items | &#8377; {totalAmount}</Title>
                        <CartButton>VIEW CART</CartButton> 
                    </BottomBar>
                )} 
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        places: state.initial.places,
        cart: state.cart,
    };
};

export default connect(mapStateToProps, {onAppBootstrap, updateCart, resetCart, appBootstrap})(App);
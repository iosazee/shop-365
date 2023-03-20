import 'intersection-observer'
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Button from '@mui/material/Button';
import Cart from './components/Cart';

describe('ProductDetail', () => {
  it('should call addItemToCart function with product when "Add to Cart" button is clicked', () => {
    // Arrange

    const addItemToCartMock = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <ProductDetail addItemToCart={addItemToCartMock}>
          <Button name="Add to Cart">Add to Cart</Button>
        </ProductDetail>
      </BrowserRouter>
    );

    // Act
    fireEvent.click(getByTestId('add-to-cart'));

    // Assert
    expect(addItemToCartMock).toHaveBeenCalledTimes(1);

  });
});


describe("Cart", () => {
  it("renders 'Your cart is empty!' when there are no items", () => {
    const cartItems = [];
    const deleteCartItem = jest.fn();
    const deleteAllCartItems = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <Cart
          cartItems={cartItems}
          deleteCartItem={deleteCartItem}
          deleteAllCartItems={deleteAllCartItems}
        />
      </MemoryRouter>
    );

    expect(getByText("Your cart is empty!")).toBeInTheDocument();
  });
});

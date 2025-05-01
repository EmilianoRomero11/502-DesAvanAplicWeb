import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders with the correct label', () => {
    // Arrange
    render(<Button label="Click me" />);
    
    // Act
    const buttonElement = screen.getByText('Click me');
    
    // Assert
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    // Arrange
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    // Act
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    
    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies the disabled state correctly', () => {
    // Arrange
    render(<Button label="Click me" disabled={true} />);
    
    // Act
    const buttonElement = screen.getByText('Click me');
    
    // Assert
    expect(buttonElement).toBeDisabled();
  });

  test('applies custom className when provided', () => {
    // Arrange
    const customClass = 'custom-button-class';
    render(<Button label="Click me" className={customClass} />);
    
    // Act
    const buttonElement = screen.getByText('Click me');
    
    // Assert
    expect(buttonElement).toHaveClass(customClass);
  });

  test('has the correct type attribute', () => {
    // Arrange
    render(<Button label="Submit" type="submit" />);
    
    // Act
    const buttonElement = screen.getByText('Submit');
    
    // Assert
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});
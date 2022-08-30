// Write test spec here
// Test Pattern: AAA (Arrange, Act, Assert)

// Arrange
import { render, screen } from '@testing-library/react';
import App from './App'; // Take up the comp for testing 

// group of related test specs -- Test Suite
describe('App Component', () => { 

  // test spec / test case 
  test('should have welcome text', () => {
    // Act 
    render(<App />); 
    const welcomeTextEl = screen.getByText('Welcome to Unit Testing');

    // Assert 
    expect(welcomeTextEl).toBeInTheDocument();
  });

  it('should have app comp', () => { // 'it' is an alias of 'test'
    expect(App).toBeTruthy();
  });

});

import { fireEvent, render, screen } from '@testing-library/react';
import Company from './Company';

describe('Company Component', () => {

  it('should be availbale', () => {
    expect(Company).toBeDefined();
  });

  it('receives props and displays them properly', () => {
    render(<Company name='Cognizant Technologies Pvt Ltd'/>);

    // fetching the element by an attribute data-testid from JSX 
    expect(screen.getByTestId('companyNameEl')).toHaveTextContent('Cognizant Technologies Pvt Ltd');
  });

  it(`has 'Welcome to my Company's official website!`, () => {
    render(<Company />);
    const welcomeEl = screen.getByText('Welcome to my Company\'s official website!');
    expect(welcomeEl).toBeInTheDocument();
  }); 

  it('has css style with color green', () => {
    render(<Company />);
    expect(screen.getByTestId('empCountEl')).toHaveStyle('color:green');
  });

  // 
  it(`has a button with css class 'btn'`, () => {
    render(<Company />);
    expect(screen.getByRole('button')).toHaveClass('btn');
  });

  it(`has an element with placeholder 'Enter Country'`, () => {
    render(<Company />);
    const countryInput = screen.getByPlaceholderText('Enter Country');
    expect(countryInput).toBeTruthy();
  });

  // Test whether the input element works with onChange event
  it('should update country on onChange event', () => {
    render(<Company />);
    const countryInput = screen.getByPlaceholderText('Enter Country');

    // now checking if onChange is working or not
    // mock fire change event with the mock value
    fireEvent.change(countryInput, { target: { value: 'USA'}});
    expect(countryInput.value).toBe('USA');
    expect(screen.getByTestId('websiteCountryTxt')).toHaveTextContent('Head over to Cognizant USA Website');

    fireEvent.change(countryInput, { target: { value: 'Canada'}});
    expect(countryInput.value).toBe('Canada');
    expect(screen.getByTestId('websiteCountryTxt')).toHaveTextContent('Head over to Cognizant Canada Website');

  });



});

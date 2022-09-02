import { render, screen, waitFor } from '@testing-library/react';
import Users from './Users';
import { fetchAPI } from '../../utils/fetchAPI'

// preparing to MOCK fetchAPI call
jest.mock('../../utils/fetchAPI'); // Mocks a module with an auto-mocked version when it is being required.

describe('UsersComp', () => {

  const mockUserList = [{
    id: 2,
    name: 'Ervin Howell',
    phone: '4563456456'
  }];

  // Challenges/Disadv of API testing 
  /* 
    1. Time consuming 
    2. Availability of REST API (may be down, may be still in dev)
    3. No guarantee for the sample data like this 'Ervin Howell'. 
  */
  // Here's API TESTING - DO NOT WRITE LIKE THIS -- instead learn about mocking 
  // it(`has Ervin Howell in  user`, async() => {
  //   render(<Users />);
  //   expect(await screen.findByText('Ervin Howell')).toBeInTheDocument();
  // });

  // LEt's mock -- THIS IS RECOMMENDED
  it('renders Erwin Howell with mock data [MOCKING API]', async() => {
    fetchAPI.mockResolvedValue(mockUserList); // also learn about rejecting with error

    render(<Users />);
    await waitFor( () => {
      expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
    })
  });


});





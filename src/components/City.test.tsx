import { render, screen } from '@testing-library/react';
import City from './City';

describe('City unit test', () => {
	test('render success', async () => {
    const destination = {
      "name": "London",
      "address": "London SW1A 0AA, United Kingdom",
      "nbResident": 8.98,
      "nbHotel": 10000,
      "nbSalaryMoy": 90000,
      "nbSurface": 1572,
      "imageLink":"",
      "activated": false
  }
    render(<City destination={destination}/>);
    
    expect(screen.getByTestId('name')).toHaveTextContent('London')
    expect(screen.getByTestId('address')).toHaveTextContent('London SW1A 0AA, United Kingdom')
    expect(screen.getByTestId('nbResident')).toHaveTextContent('8,98')
    expect(screen.getByTestId('nbHotel')).toHaveTextContent('10 000')
    expect(screen.getByTestId('nbSalaryMoy')).toHaveTextContent('90 000')
    expect(screen.getByTestId('nbSurface')).toHaveTextContent('1 572')
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByTestId('switch').firstChild).not.toHaveClass('ant-switch-checked')
  })
})

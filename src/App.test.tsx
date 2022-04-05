import userEvent from "@testing-library/user-event";
import {render, screen } from '@testing-library/react';
import App from './App';


describe('Integration test', () => {
  test('integration test', async () => {
   render(<App />);

    const addButton = await screen.findByText(/ajouter/i);

    userEvent.click(addButton);
    const modal = await screen.findByText(/ajouter une nouvelle destination/i);

    expect(modal).toBeVisible();

    const destinationInput = screen.getByTestId('modalCityName');
    const adressInput = screen.getByTestId('modalCityAdress');
    const nbResidentInput = screen.getByTestId('modalNbResident');
    const nbHotelInput = screen.getByTestId('modalNbHotel');
    const nbSalaryMoyInput = screen.getByTestId('modalNbSalaryMoy');
    const nbSurfaceInput = screen.getByTestId('modalNbSurface');

    const expectedDestination = "Paris";
    userEvent.type(destinationInput, expectedDestination);
    userEvent.type(adressInput, 'Pl. de l\'Hôtel de Ville, 75004 Paris');
    userEvent.type(nbResidentInput, '2.1');
    userEvent.type(nbHotelInput, '7500');
    userEvent.type(nbSalaryMoyInput, '50000');
    userEvent.type(nbSurfaceInput, '105.4');


    userEvent.click(screen.getByText(/CONFIRM/i));
    expect(await screen.findByText(expectedDestination)).toBeVisible();
    expect(screen.getAllByRole('img', {name: 'destination'}).length).toBe(1);

  })
})
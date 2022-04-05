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

    const destinationInput = screen.getByPlaceholderText(/nom de la destination/i);
    const adressInput = screen.getByPlaceholderText(/Adress/i);
    const nbResidentInput = screen.getByPlaceholderText(/Nb Habitants/i);
    const nbHotelInput = screen.getByPlaceholderText(/Nb Hôtel/i);
    const nbSalaryMoyInput = screen.getByPlaceholderText(/Revenu Moy/i);
    const nbSurfaceInput = screen.getByPlaceholderText(/Superficie/i);

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
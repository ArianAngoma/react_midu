import {fireEvent, render, screen} from '@testing-library/react';
import {Suspense} from "react";
import App from '../App';

test('home work as expected', async () => {
    render(
        <Suspense>
            <App/>
        </Suspense>
    );
    const linkElement = await screen.findByText(/Los gifs más recientes/i);
    expect(linkElement).toBeInTheDocument();
});

test('search form could be used', async () => {
    render(<App/>)
    const input = await screen.findByRole('textbox');
    fireEvent.change(input, {target: {value: 'rick and morty'}});

    const button = await screen.findByRole('button');
    fireEvent.click(button);

    const title = await screen.findByText('rick and morty');
    expect(title).toBeVisible();
})

import {Suspense} from "react";
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
    render(
        <Suspense>
            <App/>
        </Suspense>
    );
    const linkElement = await screen.findByText(/Los gifs más recientes/i);
    expect(linkElement).toBeInTheDocument();
});

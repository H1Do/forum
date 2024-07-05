import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderForTests } from 'shared/lib/tests/renderForTests/renderForTests';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        renderForTests(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        screen.debug();
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('Test increment', () => {
        renderForTests(<Counter />);
        const incrementButton = screen.getByTestId('increment-button');
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
        userEvent.click(incrementButton);
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });

    test('Test decrement', () => {
        renderForTests(<Counter />);
        const decrementButton = screen.getByTestId('decrement-button');
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
        userEvent.click(decrementButton);
        expect(screen.getByTestId('value-title')).toHaveTextContent('-1');
    });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeForm from './EmployeeForm';
import '@testing-library/jest-dom';

const mockCountries = [
    { id: '1', country: 'India' },
    { id: '2', country: 'USA' },
];

describe('EmployeeForm', () => {
    const mockOnSubmit = jest.fn();

    it('renders all form fields', () => {
        render(<EmployeeForm onSubmit={mockOnSubmit} countries={mockCountries} />);

        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Mobile/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/District/i)).toBeInTheDocument();
    });

    it('shows error messages for required fields on empty submit', async () => {
        render(<EmployeeForm onSubmit={mockOnSubmit} countries={mockCountries} />);

        fireEvent.click(screen.getByRole('button', { name: /Save/i }));

        expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Email required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Mobile required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Country required/i)).toBeInTheDocument();
    });

    it('validates email format', async () => {
        render(<EmployeeForm onSubmit={mockOnSubmit} countries={mockCountries} />);

        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'invalid-email' } });
        fireEvent.click(screen.getByRole('button', { name: /Save/i }));

        expect(await screen.findByText(/Invalid email/i)).toBeInTheDocument();
    });
});

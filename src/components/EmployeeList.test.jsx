import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeList from './EmployeeList';
import '@testing-library/jest-dom';

const mockEmployees = [
    { id: '1', name: 'John Doe', email: 'john@example.com', mobile: '1234567890', country: '1' },
];

const mockCountries = [
    { id: '1', country: 'India' },
];

describe('EmployeeList', () => {
    const mockOnDelete = jest.fn();
    const mockOnEdit = jest.fn();

    it('renders employee data correctly', () => {
        render(
            <EmployeeList
                employees={mockEmployees}
                countries={mockCountries}
                onDelete={mockOnDelete}
                onEdit={mockOnEdit}
            />
        );

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john@example.com')).toBeInTheDocument();
        expect(screen.getByText('1234567890')).toBeInTheDocument();
        expect(screen.getByText('India')).toBeInTheDocument();
    });

    it('calls onEdit when edit button is clicked', () => {
        render(
            <EmployeeList
                employees={mockEmployees}
                countries={mockCountries}
                onDelete={mockOnDelete}
                onEdit={mockOnEdit}
            />
        );

        fireEvent.click(screen.getByText(/Edit/i));
        expect(mockOnEdit).toHaveBeenCalledWith('1');
    });

    it('calls onDelete when delete button is clicked', () => {
        render(
            <EmployeeList
                employees={mockEmployees}
                countries={mockCountries}
                onDelete={mockOnDelete}
                onEdit={mockOnEdit}
            />
        );

        fireEvent.click(screen.getByText(/Delete/i));
        expect(mockOnDelete).toHaveBeenCalledWith('1');
    });
});

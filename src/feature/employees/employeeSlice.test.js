import employeeReducer, { fetchEmployees, addEmployee } from './employeeSlice';
import axiosInstance from '../../services/axiosInstance';

jest.mock('../../services/axiosInstance');

describe('employeeSlice', () => {
    const initialState = {
        data: [],
        loading: false,
        error: null,
    };

    it('should handle initial state', () => {
        expect(employeeReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle fetchEmployees.pending', () => {
        const action = { type: fetchEmployees.pending.type };
        const state = employeeReducer(initialState, action);
        expect(state.loading).toBe(true);
    });

    it('should handle fetchEmployees.fulfilled', () => {
        const employees = [{ id: 1, name: 'John Doe' }];
        const action = { type: fetchEmployees.fulfilled.type, payload: employees };
        const state = employeeReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.data).toEqual(employees);
    });

    it('should handle fetchEmployees.rejected', () => {
        const error = 'Failed to fetch';
        const action = { type: fetchEmployees.rejected.type, payload: error };
        const state = employeeReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toBe(error);
    });

    it('should handle addEmployee.fulfilled', () => {
        const newEmployee = { id: 2, name: 'Jane Doe' };
        const action = { type: addEmployee.fulfilled.type, payload: newEmployee };
        const currentState = { ...initialState, data: [{ id: 1, name: 'John' }] };
        const state = employeeReducer(currentState, action);
        expect(state.data).toHaveLength(2);
        expect(state.data).toContainEqual(newEmployee);
    });
});

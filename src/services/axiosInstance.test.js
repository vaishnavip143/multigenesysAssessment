import axiosInstance from './axiosInstance';

describe('axiosInstance', () => {
    it('has correct baseURL', () => {
        expect(axiosInstance.defaults.baseURL).toBe('https://669b3f09276e45187d34eb4e.mockapi.io/api/v1');
    });

    it('has correct content-type header', () => {
        expect(axiosInstance.defaults.headers['Content-Type']).toBe('application/json');
    });
});

import { AuthService } from "./authservice.service";

describe('AuthService test', () => {
    let service: AuthService;

    beforeEach(() => {
        service = new AuthService;
    });

    afterEach(() => {
        service = null;
        localStorage.removeItem('token');
    })

    it('should return something', () => {
        localStorage.setItem('token', '1234');
        expect(service.isAuthenticated()).toBeTruthy();
    })

    // it('shuld return null or falsy', () => {
    //     expect(service.isAuthenticated()).toBeFalsy();
    // })
})
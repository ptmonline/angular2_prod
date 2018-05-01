import { LoginComponent } from "./login.component";
import { AuthService } from "../auth/authservice.service";

describe('Login Component test with real service', () => {
    let login: LoginComponent;
    let service: AuthService;
    let spy: any;

    beforeEach(() => {
        service = new AuthService();
        login = new LoginComponent(service);
    })

    afterEach(() => {
        localStorage.removeItem('token');
        service = null;
        login = null;
    })

    it('shoud return true', () => {
        expect(login.needsLogin()).toBeTruthy();
    })

    it('should return false', () => {
        localStorage.setItem('token', '1234');
        expect(login.needsLogin()).toBeFalsy();
    })

    it('should return true using spies', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
        expect(login.needsLogin()).toBeTruthy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    })

    it('should return falsy',()=>{
        spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(login.needsLogin()).toBeFalsy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    })
})
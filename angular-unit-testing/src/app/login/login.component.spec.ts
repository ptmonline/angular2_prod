import { LoginComponent } from "./login.component";
import { AuthService } from "../auth/authservice.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('Login Component test with real service', () => {
    // let login: LoginComponent;
    // let service: AuthService;
    // let spy: any;

    // beforeEach(() => {
    //     service = new AuthService();
    //     login = new LoginComponent(service);
    // })

    // afterEach(() => {
    //     localStorage.removeItem('token');
    //     service = null;
    //     login = null;
    // })

    let login: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let service: AuthService;
    let spy: any;
    let el: DebugElement;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [AuthService]
        })

        fixture = TestBed.createComponent(LoginComponent);
        login = fixture.componentInstance;
        service = TestBed.get(AuthService);
        el = fixture.debugElement.query(By.css('a'));
    })

    afterEach(()=>{
        localStorage.removeItem('token');
        login = null;
        service = null;
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

    it('should return blank text on button',()=>{
        expect(el.nativeElement.textContent.trim()).toBe('');
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Logout');
    })
})
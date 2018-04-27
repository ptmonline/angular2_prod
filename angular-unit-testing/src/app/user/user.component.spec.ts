import { UserService } from './user.service';
import { UserServiceMock } from '../mocks/user.service.mock';
import { UserComponent } from './user.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from 'selenium-webdriver';

describe('UserService', ()=>{
    let comp: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations: [UserComponent],
            providers: [{provide: UserService, useClass: UserServiceMock}]
        }).compileComponents().then(()=>{
            fixture = TestBed.createComponent(UserComponent);
            comp = fixture.componentInstance;
        })
    }))

    it('should have one user', async(()=>{
        expect(comp.users.length).toEqual(1);
    }))

    it('html should render one user', async(()=>{
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('p');
        expect(el.innerText).toContain('user666');
    }))
})
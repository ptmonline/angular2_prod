import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', ()=>{
    let comp: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations: [
                ContactComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule
            ]
        }).compileComponents().then(()=>{
            fixture = TestBed.createComponent(ContactComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(By.css('form'));
            el = de.nativeElement;
        });
    }));

    it('should say contact page', async(()=>{
        expect(comp.text).toEqual('contact page');
    }))

    it('should return true on submit', async(()=>{
        comp.onSubmit();
        expect(comp.submitted).toBeTruthy();
    }))

    it('form should be submitted', async(()=>{
        fixture.detectChanges();
        spyOn(comp, 'onSubmit');
        el = fixture.debugElement.query(By.css('button')).nativeElement;
        el.click();
        expect(comp.onSubmit).toHaveBeenCalledTimes(1);
    }))

    it('should be invalid submit', async(()=>{
        comp.contactForm.controls['name'].setValue('');
        comp.contactForm.controls['email'].setValue('');
        comp.contactForm.controls['text'].setValue('');
        expect(comp.contactForm.valid).toBeFalsy();
    }))

    it('should return valid submit', async(()=>{
        comp.contactForm.controls['name'].setValue('John');
        comp.contactForm.controls['email'].setValue('Doe@gmail.com');
        comp.contactForm.controls['text'].setValue('I am an unknow cadaver');
        expect(comp.contactForm.valid).toBeTruthy();
    }))
})

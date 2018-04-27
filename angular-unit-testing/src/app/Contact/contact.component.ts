import { Component } from "@angular/core";
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    templateUrl: './contact.component.html'
})

export class ContactComponent{
    text = 'contact page';
    contactForm: FormGroup;
    contact = {
        name: '',
        email: '',
        text: ''
    };

    submitted:boolean = false;

    constructor(){
        this.createForm();
    }

    createForm(){
        this.contactForm = new FormGroup({
            'name': new FormControl(this.contact.name, [Validators.required, Validators.minLength(4)]),
            'email': new FormControl(this.contact.email, [Validators.required, Validators.email]),
            'text': new FormControl(this.contact.text, Validators.required)
        })
    }

    onSubmit():void{
        this.submitted = true;
    }
}
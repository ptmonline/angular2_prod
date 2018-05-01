import { Component } from "@angular/core";
import { AuthService } from "../auth/authservice.service";

@Component({
    selector: 'login',
    template: `<a [hidden]="needsLogin()">Login</a>`
})

export class LoginComponent {
    constructor(private auth: AuthService) { }

    needsLogin() {
        return !this.auth.isAuthenticated();
    }
}
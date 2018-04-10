import { OnInit, Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    constructor (private router: Router) {}

    ngOnInit() {}

    loginBtn() {
        this.router.navigateByUrl('/dashboard');
    }
}
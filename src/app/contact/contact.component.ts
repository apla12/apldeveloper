import { Component, Directive, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from '../service/spinner.service';
import '../../assets/smtp.js';
declare let Email : any;

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form = this.fb.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    recaptcha: new FormControl('', [Validators.required]),
  });

  matcher = new MyErrorStateMatcher();
  // model: Model = new Model();
  constructor(private fb: FormBuilder,
    private spinner: SpinnerService,
    private _snackBar: MatSnackBar,
    // private profile: ProfileService,
    // private snotify: SnotifyService
  ) { }

  ngOnInit(): void {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  sendEMail() {
    // this.spinner.showSpinner();
    this._snackBar.open('Email successfully sent!', 'ok', {
      duration: 20000,
    });
    // this.spinner.stopSpinner();
    this.form.reset();
  }

  onSubmit(f: NgForm) {

    // Email.send({
    // Host : 'smtp.elasticemail.com',

    // Username : 'anapaulalopes12@gmail.com',
    // Password : '0EDC24FAA9F47F0A173F8DAB75AD71C55D50',

    // To : 'anapaulalopes12@gmail.com',
    // From : 'anapaulalopes12@gmail.com',
    // Subject : '',//this.model.subject,
    // Body : `
    // <i>This is sent as a feedback from my resume page.</i> <br/>
    // <b>Name: </b>${this.form.get('name')} <br />
    // <b>Email: </b>${this.form.get('email')}<br />
    // <b>Subject: </b>${this.form.get('subject')}<br />
    // <b>Message:</b> <br /> ${this.form.get('message')} <br><br>
    // <b>~End of Message.~</b> `
    // }).then( message => {alert(message); f.resetForm(); } );

    }


}

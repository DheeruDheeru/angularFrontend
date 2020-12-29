import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  signupForm: any;
  login: any;
  uploadedFiles: any;

  constructor(private _auth: AuthService,private fb:FormBuilder, private _router:Router,private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      emailField:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(4),Validators.required]]
    })

    this.signupForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      role:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.pattern('[0-9]{10}')]],
      address:['',[Validators.required]],
      profile:[null],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
      zip:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  onSubmitlogin(){
    let email = this.loginForm.get('emailField').value;
    let password = this.loginForm.get('password').value;
    this._auth.loginUser(email,password).subscribe(res=>{
      this.login = res;
      // console.log(res);
      // console.log(this.login);
      if (this.login.match) {
        localStorage.setItem('token', this.login.accesstoken);
        this._router.navigate(['/index']);
      } else {
        this.toastr.info('User Not found<br>OR<br>email and password invalid','Message'); 
      }
      },
      err => {
        console.log(err);
      }
    ) 
  }

  fileChange(event:any) {
    if (event.target.files.length>0) {
      this.signupForm.get('profile').value = event.target.files[0];
    }
}

  onSignupSubmit(){
    let formData:any = new FormData();
    formData.append('firstName',this.signupForm.get('firstName').value);
    formData.append('lastName',this.signupForm.get('lastName').value);
    formData.append('role',this.signupForm.get('role').value);
    formData.append('password',this.signupForm.get('password').value);
    formData.append('email',this.signupForm.get('email').value);
    formData.append('phone',this.signupForm.get('phone').value);
    formData.append('address',this.signupForm.get('address').value);
    formData.append('profile',this.signupForm.get('profile').value);
    formData.append('city',this.signupForm.get('city').value);
    formData.append('state',this.signupForm.get('state').value);
    formData.append('country',this.signupForm.get('country').value);
    formData.append('zip',this.signupForm.get('zip').value);

    this._auth.signup(formData)
    .subscribe(
      res => {
        this.toastr.success('Registration Successfully','Message');
        this.signupForm.reset();
        this._router.navigate(['/']);
      },
      err => console.log(err)
    )      
  }

}

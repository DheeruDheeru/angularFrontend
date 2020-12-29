import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router,private toastr: ToastrService) { }
  canActivate():boolean{
      if (this._authService.loggedIn()) {
        // console.log('true')
        return true;
      } else {
        // console.log('false');
        this.toastr.info('Please first login','Message');            
        this._router.navigate(['/login'])
        return false;
      }
  }
}

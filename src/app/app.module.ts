import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserRouting } from './router/user-routing';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { Error404Component } from './components/error404/error404.component';
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    CategoryComponent,
    CheckoutComponent,
    CartComponent,
    ProductDetailComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(UserRouting),
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      preventDuplicates:true,
      progressBar:true,
      enableHtml:true,
      progressAnimation:"decreasing"
    }),
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

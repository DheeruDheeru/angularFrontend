import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';
import { CategoryComponent } from '../components/category/category.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { Error404Component } from '../components/error404/error404.component';
import { IndexComponent } from '../components/index/index.component';
import { LoginComponent } from '../components/login/login.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { AuthGuard } from '../guard/auth.guard';

export const UserRouting:Routes=[
    { path:'', redirectTo:'index', pathMatch:'full' },
    { path:'index', component:IndexComponent },
    { path:'login', component:LoginComponent },
    { path:'category', component:CategoryComponent },
    { path:'checkout', component:CheckoutComponent, canActivate: [AuthGuard] },
    { path:'cart', component:CartComponent, canActivate: [AuthGuard] },
    { path:'productdetail', component:ProductDetailComponent },
    { path:'**', component:Error404Component }
];
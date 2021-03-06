import { CheckoutPageComponent } from './pages/store/checkout-page/checkout-page.component';
import { AuthService } from './services/auth.service';
import { MaskDirective } from './directives/mask.directive';
import { FramePageComponent } from './pages/master/frame.page';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { PetsPageComponent } from './pages/account/pets-page-component/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { ProfilePageComponent } from './pages/account/profile-page/profile-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    LoginPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    PetsPageComponent,
    SignupPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent,
    LoadingComponent,
    MaskDirective,
    ProfilePageComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

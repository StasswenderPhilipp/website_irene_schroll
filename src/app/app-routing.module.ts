import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CredentialsComponent} from "./pages/credentials/credentials.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {PrivacyComponent} from "./pages/privacy/privacy.component";
import {ServicesComponent} from "./pages/services/services.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'credentials', component: CredentialsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { AboutPageComponent } from '../about-page/about-page.component';
import { LocationPageComponent } from '../location-page/location-page.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { DesignPageComponent } from '../design-page/design-page.component';

export const routes: Routes = [
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'locations',
        component: LocationPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'web-design',
        component: DesignPageComponent
    },
    {
        path: 'app-design',
        component: DesignPageComponent
    },
    {
        path: 'graphic-design',
        component: DesignPageComponent
    }

];

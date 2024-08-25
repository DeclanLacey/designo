import { Routes } from '@angular/router';
import { AboutPageComponent } from '../about-page/about-page.component';
import { LocationPageComponent } from '../location-page/location-page.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { DesignCardComponent } from '../design-card/design-card.component';
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
        path: 'design',
        component: DesignPageComponent
    }

];

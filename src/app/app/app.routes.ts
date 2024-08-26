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
        component: DesignPageComponent,
        data: ["Web Design", "We build websites that serve as powerful marketing tools and bring memorable brand experiences."]
    },
    {
        path: 'app-design',
        component: DesignPageComponent,
        data: ["App Design", "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."]
    },
    {
        path: 'graphic-design',
        component: DesignPageComponent,
        data: ["Graphic Design", "We deliver eye-catching branding materials that are tailored to meet your business objectives."]
    }

];

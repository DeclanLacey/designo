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
        data: [
            {
                "name": "Web Design",
                "desc": "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
            },
            {
                "name": "express",
                "desc": "A multi-carrier shipping website for e-commerce businesses",
                "image": "/web-design/image-express.jpg"
            },
            {
                "name": "transfer",
                "desc": "Site for low-cost money transfers and sending money within seconds",
                "image": "/web-design/image-transfer.jpg"
            },
            {
                "name": "photon",
                "desc": "A state-of-the-art music player with high-resolution audio and DSP effects",
                "image": "/web-design/image-photon.jpg"
            },
            {
                "name": "builder",
                "desc": "Connects users with local contractors based on their location",
                "image": "/web-design/image-builder.jpg"
            },
            {
                "name": "blogr",
                "desc": "Blogr is a platform for creating an online blog or publication",
                "image": "/web-design/image-blogr.jpg"
            },
            {
                "name": "camp",
                "desc": "Get expert training in coding, data, design, and digital marketing",
                "image": "/web-design/image-camp.jpg"
            }
        ]
    },
    {
        path: 'app-design',
        component: DesignPageComponent,
        data: [
            {
                "name": "App Design",
                "desc": "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
            },
            {
                "name": "airfilter",
                "desc": "Solving the problem of poor indoor air quality by filtering the air",
                "image": "/app-design/desktop/image-airfilter.jpg"
            },
            {
                "name": "eyecam",
                "desc": "Product that lets you edit your favorite photos and videos at any time",
                "image": "/app-design/desktop/image-eyecam.jpg"
            },
            {
                "name": "faceit",
                "desc": "Get to meet your favorite internet superstar with the faceit app",
                "image": "/app-design/desktop/image-faceit.jpg"
            },
            {
                "name": "todo",
                "desc": "A todo app that features cloud sync with light and dark mode",
                "image": "/app-design/desktop/image-todo.jpg"
            },
            {
                "name": "loopstudios",
                "desc": "A VR experience app made for Loopstudios",
                "image": "/app-design/desktop/image-loopstudios.jpg"
            }
        ]
    },
    {
        path: 'graphic-design',
        component: DesignPageComponent,
        data: [
            {
                "name": "Graphic Design",
                "desc": "We deliver eye-catching branding materials that are tailored to meet your business objectives."
            },
            {
                "name": "tim brown",
                "desc": "A book cover designed for Tim Brown’s new release, ‘Change’",
                "image": "/graphic-design/desktop/image-change.jpg"
            },
            {
                "name": "boxed water",
                "desc": "A simple packaging concept made for Boxed Water",
                "image": "/graphic-design/desktop/image-boxed-water.jpg"
            },
            {
                "name": "science!",
                "desc": "A poster made in collaboration with the Federal Art Project",
                "image": "/graphic-design/desktop/image-science.jpg"
            }
        ]
    }

];

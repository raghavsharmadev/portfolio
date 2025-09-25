import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Education } from './education/education';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', component: Layout },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'skill', component: Skills },
    { path: 'experience', component: Experience },
    { path: 'education', component: Education },
    { path: 'contact', component: Contact }
];

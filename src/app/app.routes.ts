import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
    title: 'Homepage'
  },
  {
    path: 'about',
    component: About,
    title: 'About'
  },
  {
    path: 'skills',
    component: Skills,
    title: 'Skills'
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Projects'
  }
];

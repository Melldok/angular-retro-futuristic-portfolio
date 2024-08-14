import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./Dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path : 'projects',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/ProjectsRender/ProjectsRender.component').then(m => m.ProjectsRenderComponent)
      },
      {
        path: 'tech-stach',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/TechStackRender/TechStackRender.component').then(m => m.TechStackRenderComponent)
      },
      {
        path : 'about',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/AboutRender/AboutRender.component').then(m => m.AboutRenderComponent)
      },
      {
        path : 'next-steps',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/NextStepsRender/NextStepsRender.component').then(m => m.NextStepsRenderComponent)
      },
      {
        path : 'contact',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/ContactRender/ContactRender.component').then(m => m.ContactRenderComponent)
      },
      {
        path : '',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/HomeRender/HomeRender.component').then(m => m.HomeRenderComponent),
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

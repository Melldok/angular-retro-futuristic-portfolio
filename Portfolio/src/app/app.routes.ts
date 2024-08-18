import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./Dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path : 'home',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/HomeRender/HomeRender.component').then(m => m.HomeRenderComponent),
        pathMatch: 'full'
      },
      {
        path : 'projects',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/ProjectsRender/ProjectsRender.component').then(m => m.ProjectsRenderComponent),
        children: [
          {
            path : 'dev-projects',
            loadComponent: () => import('./Dashboard/centralRenderSection/components/ProjectsRender/components/devProjects/devProjects.component').then(m => m.DevProjectsComponent)
          },
          {
            path : 'ux-projects',
            loadComponent: () => import('./Dashboard/centralRenderSection/components/ProjectsRender/components/uxProjects/uxProjects.component').then(m => m.UxProjectsComponent)
          },
          {
            path : '',
            redirectTo: 'dev-projects',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'tech-stack',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/TechStackRender/TechStackRender.component').then(m => m.TechStackRenderComponent)
      },
      {
        path : 'about',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/AboutRender/AboutRender.component').then(m => m.AboutRenderComponent)
      },
      {
        path : 'next_steps',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/NextStepsRender/NextStepsRender.component').then(m => m.NextStepsRenderComponent)
      },
      {
        path : 'contact',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/ContactRender/ContactRender.component').then(m => m.ContactRenderComponent)
      },
      {
        path : 'project/:id',
        loadComponent: () => import('./Dashboard/centralRenderSection/components/ProjectRender/ProjectRender.component').then(m => m.ProjectRenderComponent)
      },
      {
        path : '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

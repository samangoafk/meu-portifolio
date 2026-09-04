import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: '',
    loadComponent: () => import('./features/sobre/sobre').then(m => m.Sobre)
  },
    
  {
    path: 'sobre',
    loadComponent: () => import('./features/sobre/sobre').then(m => m.Sobre)
  },
  {
    path: 'formacao',
    loadComponent: () => import('./features/formacao/formacao').then(m => m.Formacao)
  },
  {
    path: 'habilidades',
    loadComponent: () => import('./features/habilidades/habilidades').then(m => m.Habilidades)
  },
  {
    path: 'projetos',
    loadComponent: () => import('./features/projetos/projetos').then(m => m.Projetos)
  },
];
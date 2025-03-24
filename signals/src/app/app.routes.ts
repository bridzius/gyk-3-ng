import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: 'home',
    loadComponent: () =>
      import('./main/main.component').then((m) => m.MainComponent),
  },
  {
    path: 'signal',
    loadComponent: () =>
      import('./signal/signal.component').then((m) => m.SignalComponent),
  },
  {
    path: 'computed',
    loadComponent: () =>
      import('./computed/computed.component').then((m) => m.ComputedComponent),
  },
  {
    path: 'effect',
    loadComponent: () =>
      import('./effect/effect.component').then((m) => m.EffectComponent),
  },
  {
    path: 'linked-signal',
    loadComponent: () =>
      import('./linked-signal/linked-signal.component').then(
        (m) => m.LinkedSignalComponent
      ),
  },
  {
    path: 'inputs',
    loadComponent: () =>
      import('./inputs/inputs-parent/inputs-parent.component').then(
        (m) => m.InputsParentComponent
      ),
  },
  {
    path: 'resource',
    loadComponent: () =>
      import('./resource/resource.component').then((m) => m.ResourceComponent),
  },
  { path: '**', redirectTo: 'home' },
];

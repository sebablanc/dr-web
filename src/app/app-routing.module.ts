import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'dr-computers',
    loadChildren: () => import('./pages/dr-computers/dr-computers.module').then( m => m.DrComputersPageModule)
  },
  {
    path: 'dr-kids',
    loadChildren: () => import('./pages/dr-kids/dr-kids.module').then( m => m.DrKidsPageModule)
  },
  {
    path: 'promociones',
    loadChildren: () => import('./pages/promociones/promociones.module').then( m => m.PromocionesPageModule)
  },
  {
    path: 'boletin-informativo',
    loadChildren: () => import('./pages/boletin-informativo/boletin-informativo.module').then( m => m.BoletinInformativoPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./pages/consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'premios',
    loadChildren: () => import('./pages/premios/premios.module').then( m => m.PremiosPageModule)
  },
  {
    path: 'curso-detail',
    loadChildren: () => import('./pages/curso-detail/curso-detail.module').then( m => m.CursoDetailPageModule)
  },
  {
    path: 'curso-form',
    loadChildren: () => import('./pages/curso-form/curso-form.module').then( m => m.CursoFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
//DEFAULT
import { DefaultComponent } from './components/default/default.component';
//PERSONAS
import { PersonasComponent } from './components/personas/personas.component';
//REGIONES
import { RegionesComponent } from './components/regiones/regiones.component';
//PERSONAS DETAILS
import { PersonaDetailsComponent } from './components/personas/persona-details/persona-details.component';
//REGIONES DETAILS
import { RegionDetailsComponent } from './components/regiones/region-details/region-details.component';
//creo una propiedad appRputes que instancia la clase Routes
const appRoutes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'personas',
    component: PersonasComponent,
  },
  {
    path: 'personas/:id',
    component: PersonaDetailsComponent,
  },
  {
    path: 'regiones',
    component: RegionesComponent,
  },
  {
    path: 'regiones/:id',
    component: RegionDetailsComponent,
  },
  {
    path: '**',
    component: DefaultComponent,
  },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

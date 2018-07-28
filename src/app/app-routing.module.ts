import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ProComponent } from './pro/pro.component';
import { PersosComponent } from './persos/persos.component';

const routes: Routes = [  
  { path: '', component: PresentationComponent },
  { path: 'pros', component: ProComponent },
  { path: 'persos', component: PersosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CepComponent } from './cep/cep.component';

const routes: Routes = [
  /* {
    path: 'contador',
    component: CounterComponent,
  }, */
  {
    path: 'cep',
    component: CepComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

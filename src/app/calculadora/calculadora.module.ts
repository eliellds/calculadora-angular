import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';


@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  // importando componentes para dentro do módulo
  imports: [
    CommonModule
  ],
  // exportando componentes deste módulo
  // assim será possível instanciar o componente em app.component.html
  exports: [
    CalculadoraComponent
  ],
  // registrando serviços que podem ser utilizados
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { ComplexFormRoutingModule } from './complex-form-routing.module'
import { ComplexFormComponent } from './components/complex-form.component'
import { ComplexFormService } from './services/complex-form.service'

@NgModule({
  declarations: [ComplexFormComponent],
  imports: [CommonModule, ComplexFormRoutingModule, SharedModule],
  providers: [ComplexFormService],
})
export class ComplexFormModule {}

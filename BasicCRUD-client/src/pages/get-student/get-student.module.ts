import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetStudentPage } from './get-student';

@NgModule({
  declarations: [
    GetStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(GetStudentPage),
  ],
})
export class GetStudentPageModule {}

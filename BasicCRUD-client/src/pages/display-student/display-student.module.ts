import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayStudentPage } from './display-student';

@NgModule({
  declarations: [
    DisplayStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayStudentPage),
  ],
})
export class DisplayStudentPageModule {}

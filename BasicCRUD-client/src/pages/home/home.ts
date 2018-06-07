import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddStudentPage } from '../add-student/add-student';
import { GetStudentPage } from '../get-student/get-student';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  public addStudent() {
    this.navCtrl.push(AddStudentPage);
  }

  public getStudents() {
    this.navCtrl.push(GetStudentPage);
  }

  public deleteStudent() {
    //
  }
}

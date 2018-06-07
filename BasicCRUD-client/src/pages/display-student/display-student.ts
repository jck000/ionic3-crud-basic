import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Student, StudentProvider, Count } from '../../providers/student/student';
import { AddStudentPage } from '../add-student/add-student';


@IonicPage()
@Component({
  selector: 'page-display-student',
  templateUrl: 'display-student.html',
})
export class DisplayStudentPage {

  student: Student;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public viewCtrl: ViewController, public studentProvider: StudentProvider) {

    this.student = navParams.get('student');

  }

  
  //To close detailed view of a student
  closeStudentModal() {
    this.viewCtrl.dismiss();
  }



  public updateStudent(student: Student) {
    this.navCtrl.push(AddStudentPage, {student: student, flag: 1});
    this.closeStudentModal();
  }


  // To delete a student
  public deleteStudent(student: Student) {
    this.studentProvider
        .deleteStudent(student.id)
        .subscribe((response: Count) => {
          console.log(`Deleted ${response.count} successfully`);
          this.closeStudentModal();
        });
  }

}

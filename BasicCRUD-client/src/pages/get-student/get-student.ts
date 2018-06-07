import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { StudentProvider, Student } from '../../providers/student/student';
import { DisplayStudentPage } from '../display-student/display-student';


@IonicPage()
@Component({
  selector: 'page-get-student',
  templateUrl: 'get-student.html',
})
export class GetStudentPage{

  public students = new Array<Student>();

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public events: Events,
              public navParams: NavParams, public studentProvider: StudentProvider) {

    this.events.subscribe('reloadStudents',() => {
      this.getStudents();
    });
              
  }

  ionViewWillEnter() {
    this.getStudents();
  }

  // To view the students by Roll Number
  public getStudents() {
    this.studentProvider
        .getStudents()
        .subscribe((allStudents: Student[]) => {
          this.students = allStudents;
        });
  }

  // Display details of student selected from list by roll number
  openStudentModal(student: Student) {

    let studentModal = this.modalCtrl.create(DisplayStudentPage, {student: student});
    studentModal.present();
    studentModal.onDidDismiss(data => {
      this.getStudents();
    });

  }
  

}

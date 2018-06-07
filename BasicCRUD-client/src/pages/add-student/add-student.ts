import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { StudentProvider, Student } from '../../providers/student/student';


@IonicPage()
@Component({
  selector: 'page-add-student',
  templateUrl: 'add-student.html',
})
export class AddStudentPage {

  // To access and store details from form inputs

  studentForm: FormGroup;
  student: Student;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public events: Events,
              public navParams: NavParams, public studentProvider: StudentProvider) {

                this.studentForm = this.formBuilder.group({
                  rno: [''],
                  name: [''],
                  semester: [''],
                  gender: [''],
                  mark: ['']
                });
  }

  ionViewWillEnter() {

    // To update existing student
    if(this.navParams.get('flag') == 1) {
      this.student = this.navParams.get('student');
      this.studentForm = this.formBuilder.group({
        rno: [`${this.student.rno}`],
        name: [`${this.student.name}`],
        semester: [`${this.student.semester}`],
        gender: [`${this.student.gender}`],
        mark: [`${this.student.mark}`]

      });
    }
  }

  // To add a new student
  public submit() {
    console.log(this.studentForm.value);

    if(this.navParams.get('flag') == 1) {
      let originalId = this.student.id;
      this.student = this.studentForm.value;
      this.student.id = originalId;
      this.studentProvider
      .updateStudent(this.student)
      .subscribe((updatedStudent: Student) => {
        console.log("Updated successfully!", updatedStudent);
        this.events.publish('reloadStudents');
        this.navCtrl.pop();
      });
    } else {
      this.studentProvider
          .addStudent(this.studentForm.value)
          .subscribe((student: Student) => {
            console.log("Created successfully", student);
            this.navCtrl.pop();
          });
    }
  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StudentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class Student {
  rno: string;
  name: string;
  semester: number;
  gender: string;
  mark: string;
  id?: string;
}

export class Count {
  count: number;
}

const url: string = 'http://localhost:3000/api/Students';
const filterParam: string = 'filter';



@Injectable()
export class StudentProvider {

  constructor(public http: HttpClient) {
    
  }

  // Add student to database
  public addStudent(student: Student) {
    console.log(student);
    return this
           .http
           .post(url, student);
  }

  // Get student(s) from database
  public getStudents(queryParams?: Object) {
    let params = new HttpParams();

    if(queryParams) {
      params = params.set(filterParam, JSON.stringify(queryParams));
    }    

    return this
      .http
      .get<Student[]>( url, {
        params:params
      });
  }

  //Update a selected student
  public updateStudent(student: Student) {
    return this
           .http
           .patch(url, student);
  }

  //Delete a selected student from database
  public deleteStudent(id: string) {
    return this
           .http
           .delete(`${url}/${id}`);
  }

}

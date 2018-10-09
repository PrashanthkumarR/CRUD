import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Registration {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public dob: NgbDateStruct = null,
    public email: string = '',
    public password: string = '',
    public language: string = 'Select language'
  ) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registrations: Registration[] = [];
  regModel: Registration;
  showNew: Boolean = false;
  submitType: string = 'Save';
  selectedRow: number;
  languages: string[] = ['.NET', 'Java', 'HTML', 'Angular'];
  constructor() {
    // Add default registration data.
    this.registrations.push(new Registration('prashanth', 'Kumar', {year: 1980, month: 5, day: 12}, 'prashanth@gmail.com', 'prashanth123', 'net'));
    this.registrations.push(new Registration('gangadhara', 'S M', {year: 1975, month: 12, day: 3}, 'gangadhar@gmail.com', 'gangadhara123', 'java'));
    this.registrations.push(new Registration('shivu', 'Kumar', {year: 1970, month: 7, day: 25}, 'shivu@gmail.com', 'shivul123', 'css'));
  }

  ngOnInit() {}

  // This method associate to New Button.
  onNew() {
     
    this.regModel = new Registration();
    
    this.submitType = 'Save';
    
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      
      this.registrations.push(this.regModel);
    } else {
      // Update the existing properties values based on model.
      this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      this.registrations[this.selectedRow].lastName = this.regModel.lastName;
      this.registrations[this.selectedRow].dob = this.regModel.dob;
      this.registrations[this.selectedRow].email = this.regModel.email;
      this.registrations[this.selectedRow].password = this.regModel.password;
      this.registrations[this.selectedRow].language = this.regModel.language;
    }
    
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    
    this.selectedRow = index;
    
    this.regModel = new Registration();
    
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    
    this.submitType = 'Update';
    
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    
    this.registrations.splice(index, 1);
  }

  
  onCancel() {
   
    this.showNew = false;
  }

  
  onChangelanguage(language: string) {
    
    this.regModel.language = language;
  }

}

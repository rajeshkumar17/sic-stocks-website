import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  nameText? : string;
  emailText? : string;
  phoneText? : string;
  subjectText? : string;

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  keyPressCharacter(event: any) {
    var charCode = event.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
        return true;
    else
        return false;  }



  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  
  submitForm(formVal: NgForm) {
    this.apiService.posMethod(formVal).subscribe(res => {
      alert(res.message)
    })
  }

}

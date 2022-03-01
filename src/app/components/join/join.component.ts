import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  nameText? : string;
  emailText? : string;
  phoneText? : string;
  subjectText? : string;

  items =[
    {title:"Our Army background", description1:"Ensures we carry Discipline",description2:"Hardwork & Reliability"},
    {title:"High quality Service", description1:"Personalised experience",description2:"for our exclusive clientele"},
    {title:"29 yr old legacy", description1:"Strong army foundation",description2:"that you can trust"}
  ]
  arrayData = [
    { key: 1,title:"Be your own Boss", imageUrl: '../../../assets/images/independence.png'},
    { key: 2,title:"Zero Office Expense", imageUrl: '../../../assets/images/workspace.png'},
    { key: 3,title:"High Revenue Sharing", imageUrl: '../../../assets/images/revenue.png'},
    { key: 4,title:"Dedicated Relationship Manager", imageUrl: '../../../assets/images/hand-shake.png'},
    { key: 5,title:"Marketing and Branding Solutions", imageUrl: '../../../assets/images/megaphone.png'},
    { key: 6,title:"Easy Onboarding & online payment", imageUrl: '../../../assets/images/mobile-payment.png'},
  ]
  productData = [
    { title1:"Equity Segment", title2:"Mobile Application",title3:"Dealer Terminal",title4:"Client Terminal" },
    { title1:"Mutual Fund Platform", title2:"Star Mutual Funds",title3:"Wealth Advisory" },
    { title1: "Web Based BO Software", title2:"Tradepoint on Web OMS", title3:"Personalised Branded Email",title4:"Online eKYC" },
    { title1:"SIC Wealth", title2:"ETF Platform", title3:"Mangee Portfolio" }
  ]


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

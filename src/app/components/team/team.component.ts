import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  item = [
      {key:"1",name:"Sidharth Handa",designation:"CEO",description:"Building upon the foundations laid by our chairman, Sidharth has led SIC from a broking organisation to becoming an agile Fintech organisation and forayed into bringing Indian Equities to the world whilst bringing the world markets to India via SIC Global",iconUrl:'../../../assets/images/img2.jpeg'},
      {key:"2",name:"Dr Nupur Handa",designation:"Director of Compliance",description:"Equipped with her extreme precision, Nupur ensures that the company navigates through compliance, operational roadblocks while keeping pace with the technological disruptions which are a new norm these days.",iconUrl:'../../../assets/images/nupur_director.png'},
      {key:"3",name:"Prem Kumar",designation:"Head of Sales",description:"Broking in a developing country like India focuses on relationship first. For more than a decade, Prem has helped SIC decipher the retail b2c and position us as a go-to broking organisation for our retail customers in Bangalore and around the country.",iconUrl:'../../../assets/images/img4.jpeg'},
      {key:"4",name:"Capt. Ashok Naik",designation:"Legal Head",description: "While the rest of the team concentrates on changing the world through innovation and operational excellence, Ashok is the shield that ensures we are protected from running into unwarranted formalities and legal issues.",iconUrl:'../../../assets/images/img5.jpeg'},
      {key:"5",name:"Manjunath K",designation:"CFO",description: "In a broking organisation, the role of Finance is at the heart of everything. Manjunath has been doing all the numbers since our humble beginnings. His expertise in broking is exemplary of deep-domain understanding and has helped SIC scale as an organisation.",iconUrl:'../../../assets/images/img6.jpeg'},
]
  constructor() { }

  ngOnInit(): void {
  }

}

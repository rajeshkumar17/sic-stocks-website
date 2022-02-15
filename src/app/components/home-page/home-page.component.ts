import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  item = [
    {key:"1",name:"Innovation", description:"More than stock broking.  SIC believes in a full stack approach to transactional platforms."},
    {key:"2",name:"Speed", description:"Responsive organisation. Speed is not latency, SIC focuses on delivering more than just order level speed."},
    {key:"3",name:"Freedom", description:"Innovators shouldn’t have to choose. SIC provides a neutral infrastructure with transparent insight mechanism."},
    {key:"4",name:"Agility", description:"Relationship minus the restrictions. We believe in what we do, and we know you do as well."},
    {key:"5",name:"Values", description:"A pedigree of two decades.We have evolved since 1993 to serve solely the equity investors"},
    {key:"6",name:"Technology", description:"A world class tech stack to build on. We will manage everything while you specialise."},
]

  imageArray = [
    { key: 1, imageUrl: '../../../assets/images/csb.png'},
    { key: 2, imageUrl: '../../../assets/images/sic.png'},
    { key: 3, imageUrl: '../../../assets/images/research.png'},
    { key: 4, imageUrl: '../../../assets/images/scip.png'},
    { key: 5, imageUrl: '../../../assets/images/wealthwise.png'},
    { key: 6, imageUrl: '../../../assets/images/ayannew.png'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

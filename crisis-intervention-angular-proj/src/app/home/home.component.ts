import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  heading = 'CRISIS INTERVENTION CENTRE FOR WOMEN AT RISK'; 
  title = `St Ann's Sneha Bhawan Women's Shelter Home`;

  ngOnInit(): void {
    
    setInterval(() => {
      this.heading = (this.heading == 'CRISIS INTERVENTION CENTRE FOR WOMEN AT RISK') ? 'जोखीम असलेल्या महिलांसाठी संकट इंटरव्हेंशन सेंटर' : 'CRISIS INTERVENTION CENTRE FOR WOMEN AT RISK';
      this.title = (this.title == `St Ann's Sneha Bhawan Women's Shelter Home`) ? 'सेंट एनस् स्नेहा भवन महिला आश्रयस्थान' : `St Ann's Sneha Bhawan Women's Shelter Home`;
    }, 5000)
    
  }

}

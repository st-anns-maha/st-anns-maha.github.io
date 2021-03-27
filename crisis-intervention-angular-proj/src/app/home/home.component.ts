import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  heading = 'CRISIS INTERVENTION CENTRE FOR WOMEN AT RISK'; 
  title = `St Ann's Sneha Bhavan Women's Shelter Home`;

  ngOnInit(): void {
    
    setInterval(() => {
      this.heading = (this.heading == 'CRISIS INTERVENTION CENTRE FOR WOMEN AT RISK') ? 'पिडीत महिलांसाठी आधार गृह' : 'CRISIS INTERVENTION CENTRE FOR WOMEN AT RISK';
      this.title = (this.title == `St Ann's Sneha Bhavan Women's Shelter Home`) ? 'संत अन्ना स्नेह भवन महिला निवारा घर' : `St Ann's Sneha Bhavan Women's Shelter Home`;
    }, 5000)
    
  }

}

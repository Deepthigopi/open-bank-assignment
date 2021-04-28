import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calc',
  templateUrl: './eligibility-calc.component.html',
  styleUrls: ['./eligibility-calc.component.css']
})
export class EligibilityCalcComponent implements OnInit {
  monthlyIncome: number = 0;
  constructor() { }
  updateSetting(event: any){
    this.monthlyIncome = event.value;
  }
  ngOnInit(): void {
  }
 
}

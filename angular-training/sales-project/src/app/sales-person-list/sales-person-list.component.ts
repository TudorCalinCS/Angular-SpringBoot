import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit{

  salesPersonList: SalesPerson[] = [
    new SalesPerson("John","Texter","johntexter@gmail.com",1250),
    new SalesPerson("Pablo","Murphy","murphy@pablo.com",5000),
    new SalesPerson("Geroge","McGregor","thenotorious@mma.com",501255)
   ];

  constructor() {}

  ngOnInit() {
  }
 
}

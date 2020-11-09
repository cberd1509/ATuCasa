import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-properties',
  templateUrl: './general-properties.component.html',
  styleUrls: ['./general-properties.component.scss']
})
export class GeneralPropertiesComponent implements OnInit {

  selectedRestaurants:any[]=[];

  restaurantCategories: {id:string, label:string}[] = [
    {id:'1', label:"Hamburguesas"},
    {id:'2', label:"Italiana"},
    {id:'3', label:"Asiática"},
    {id:'4', label:"Comida Rápida"},
    {id:'5', label:"Pastas"},
    {id:'6', label:"Pizza"},
  ];
  filteredCategories: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}

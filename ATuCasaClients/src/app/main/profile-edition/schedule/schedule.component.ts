import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {



  scheduleData:any[]=[
    {dia_semana:1 , apertura: true, hora_apertura:"12:00", hora_cierre:"20:00"},
    {dia_semana:2 , apertura: true, hora_apertura:"12:00", hora_cierre:"20:00"},
    {dia_semana:3 , apertura: true, hora_apertura:"12:00", hora_cierre:"20:00"},
    {dia_semana:4 , apertura: true, hora_apertura:"12:00", hora_cierre:"20:00"},
    {dia_semana:5 , apertura: true, hora_apertura:"12:00", hora_cierre:"20:00"},
    {dia_semana:6 , apertura: true, hora_apertura:"12:00", hora_cierre:"20:00"},
    {dia_semana:7 , apertura: true, hora_apertura:"12:00", hora_cierre:"20:00"},
  ]

  constructor() { }



  ngOnInit(): void {
  }

}

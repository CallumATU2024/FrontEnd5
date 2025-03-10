import { Component, OnInit } from '@angular/core';//Oninit imported with the component
import { RouterOutlet } from '@angular/router';
import{ DataService }  from './Services/data.service';//Calling my data service file to main
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{//Oninit is being implemenet 
  title = 'data-app';

  constructor(private dataService:DataService)//Using the DataService function as a constructor
  {

  }

  //declaring the3 functions to be called on
  students: any = [];

  weather: any= [];
  temperature: any= [];

  ngOnInit(): void{//Must be called upon
    this.dataService.getStudentData().subscribe(
    (data) => { 
        this.students = data.students;//declares their names fully
    }
  );

  //calling the DataServices function
  this .dataService.getWeatherData().subscribe(
    (data)=>{
      this.weather=data.weather;
      this.temperature= data.main;
    }
  );
  }
}

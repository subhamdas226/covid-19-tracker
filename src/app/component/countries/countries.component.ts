import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from 'src/app/models/global-data';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  totalConfirmed = 0;
  totalDeaths = 0;
  totalActive = 0;
  totalRecovered = 0;
  data : GlobalDataSummary[];
  countries : string[]= [];
 
  constructor(private service : DataServiceService) { }

  ngOnInit(): void {

    this.service.getGlobalData().subscribe(result =>{
      this.data = result;
      this.data.forEach(cs =>{
        this.countries.push(cs.country)
      })
    })
  }

  updateValues(country : String){
    console.log(country);
    this.data.forEach(cs =>{
      if(cs.country == country){
        this.totalActive = cs.active;
        this.totalDeaths = cs.deaths;
        this.totalConfirmed = cs.confirmed;
        this.totalRecovered = cs.recovered;

      }
    })
  }

}

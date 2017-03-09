import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../services/flights.service";
import {Flight} from "../model/flight";

@Component({
  selector: 'app-buy-flight',
  templateUrl: './buy-flight.component.html',
  styleUrls: ['./buy-flight.component.css']
})
export class BuyFlightComponent implements OnInit {

  _flights : Flight[];
  showBuyFlights = true;
  selectedFlight : Flight;
  originFilter : string = null;

  constructor(private flightsService : FlightsService ){}

  ngOnInit() {
    this._flights = this.flightsService.getFlights();
  }

  onClickBuyFlights(){
    this.showBuyFlights = !this.showBuyFlights;
  }

  onFilterChange(filterValue: string) {
    this.originFilter = filterValue;
  }

  private onFlightClick(flight : Flight){
    this.selectedFlight = flight;
  }

  get flights() : Flight[] {

    if (this.originFilter != null) {
      return this._flights.map( (flight) => {
        console.log("Filtering by origin "+flight);
        let match = flight.origin.startsWith(this.originFilter);
        if (match) {
          return flight;
        }
      }).filter(x => !!x);
    } else {
      return this._flights;
    }

  }
}




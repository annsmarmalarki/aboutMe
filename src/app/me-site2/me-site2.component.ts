import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-site2',
  templateUrl: './me-site2.component.html',
  styleUrls: ['./me-site2.component.scss']
})
export class MeSite2Component {
    
  lat: number = 3.1225255;
  lng: number = 101.67467620000002;
  locationChoosen = false;

  onChoseLocation(event) {
    // console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChoosen = true;
  }

}

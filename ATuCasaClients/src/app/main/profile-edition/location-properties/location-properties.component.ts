import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { LocationService } from 'src/app/shared/service/location.service';
declare var google: any; //new added line
declare var geocoder: any; //new added line

@Component({
  selector: 'app-location-properties',
  templateUrl: './location-properties.component.html',
  styleUrls: ['./location-properties.component.scss'],
})
export class LocationPropertiesComponent implements OnInit {
  constructor(private locationService: LocationService) {}

  options: any;

  overlays: any[];
  autocompleteInput: any;

  namedAddress:string;

  ngOnInit(): void {
    this.initMap();
  }

  async initMap() {
    let pos = await this.locationService.getPosition();

    this.options = {
      center: pos ? pos : { lat: 4.659918, lng: -74.116058 },
      zoom: 14,
      fullScreenControl: false,
      streetViewControl: false,
    };

    this.overlays = [];
  }

  getAddress(event) {
    console.log(event);
  }

  async addMarker(event) {
    let selectedPosition = event.latLng;

    let geocodePromise = new Promise((resolve, reject) => {
      let gc = new google.maps.Geocoder();

      gc.geocode(
        {
          latLng: selectedPosition,
        },
        function (responses) {
          if (responses && responses.length > 0) {
            resolve(responses[0].formatted_address);
          } else {
            resolve('Cannot determine address at this location.');
          }
        }
      );
    });

    let value:string = <string>await geocodePromise;
    this.namedAddress = value;

    let marker = this.overlays.find((ov) => ov.title == 'Mi Restaurante');
    if (marker) {
      marker.setPosition(selectedPosition);
    } else {
      this.overlays.push(
        new google.maps.Marker({
          position: {
            lat: selectedPosition.lat(),
            lng: selectedPosition.lng(),
          },
          title: 'Mi Restaurante',
          draggable: true,
        })
      );
    }
  }
}

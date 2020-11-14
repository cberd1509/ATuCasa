import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';


declare var google;

@Component({
  selector: 'app-places-autocomplete',
  templateUrl: './places-autocomplete.component.html',
  styleUrls: ['./places-autocomplete.component.scss'],
})
export class PlacesAutocompleteComponent implements OnInit {

  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext') addresstext: any;

  autocompleteInput: string;
  queryWait: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {

    setTimeout(()=>{

      const autocomplete = new google.maps.places.Autocomplete(
        this.addresstext.nativeElement,
        {
          componentRestrictions: { country: 'CO' },
          types: [this.adressType], // 'establishment' / 'address' / 'geocode'
        }
      );
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.invokeEvent(place);
      });

    },5000)


  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }
}

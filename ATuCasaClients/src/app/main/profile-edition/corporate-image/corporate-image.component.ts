import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-corporate-image',
  templateUrl: './corporate-image.component.html',
  styleUrls: ['./corporate-image.component.scss']
})
export class CorporateImageComponent implements OnInit {


  bannerImageChangedEventVal:any;
  croppedBannerImage:any;

  profileImageChangedEventVal:any;
  croppedProfileImage:any;

  constructor() { }

  ngOnInit(): void {
  }

  profileImageChangedEvent(event: any): void {
    this.profileImageChangedEventVal = event;
  }

  profileImageCropped(event: ImageCroppedEvent) {
    this.croppedProfileImage = event.base64;
  }


  bannerImageChangedEvent(event: any): void {
    this.bannerImageChangedEventVal = event;
  }

  bannerImageCropped(event: ImageCroppedEvent) {
    this.croppedBannerImage = event.base64;
  }


}

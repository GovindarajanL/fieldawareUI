import { Component, OnInit } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'roadmap';
  constructor(private modalService: NgbModal) {
    console.log(" in map component")
   }

  ngOnInit() {
    
  }
  closeResult: string;

  selectedMarker;
  jobdesc:string;
  jobdate:Date;
  iconBase =
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

  // These are all just random coordinates need to get these from the services
  markers = [
    
    { lat: 22.33159, lng: 105.63233, alpha: 1, icon:'https://img.icons8.com/color/32/000000/today.png' },
    { lat: 7.92658, lng: -12.05228, alpha: 1, icon:'https://img.icons8.com/color/32/000000/street-view.png' },
    { lat: 48.75606, lng: -118.85900, alpha: 1, icon:'https://img.icons8.com/color/32/000000/street-view.png' },
    { lat: 5.19334, lng: -67.03352, alpha: 1, icon:'https://img.icons8.com/color/32/000000/street-view.png' },
    { lat: 12.09407, lng: 26.31618, alpha: 1, icon:'https://img.icons8.com/color/32/000000/street-view.png' },
    { lat: 47.92393, lng: 78.58339, alpha: 1, icon:'https://img.icons8.com/color/32/000000/street-view.png' }
  ];

  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 0.4,icon:this.iconBase + 'https://img.icons8.com/color/32/000000/today.png' });
  }


  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event,content) {
    console.log("open marker called ",content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    console.log("icon base is",this.iconBase);
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }

  submitbutton(){
    console.log("submit button is called",this.jobdesc,",",this.jobdate,",",this.selectedMarker);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  

}

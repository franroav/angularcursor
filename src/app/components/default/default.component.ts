import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IlustrationsService } from '../../service/ilustration.service';
import { MapService } from '../../service/map.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit, DoCheck {
  public ilustrations;
  public title: string;
  public windowSize;

  //MAPS
  public position = {
    lat: -36.826,
    lng: -73.049,
  };

  public label: object = {
    color: 'red',
    text: 'Marcador',
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private ilustrationsService: IlustrationsService,
    public maplocation: MapService
  ) {
    this.title = 'Inicio';
  }

  ngOnInit(): void {
    //

    this.ilustrations = this.ilustrationsService.obtenerIlustrations();

    // console.log(this.ilustrations);
    // console.log(window.location.hash);
  }

  ngDoCheck() {
    //el ngDoCheck se ejecutara siempre que haya un cambio en mi aplicacion
    this.onResize();
    this.apiLocation();
  }

  onResize() {
    this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    //console.log(this.windowSize);
  }

  apiLocation() {
    //const geolocation = this.maplocation.getPosition();
    //console.log(geolocation);
    //this.position.lat = Number(geolocation[0].latitude);
    //this.position.lng = Number(geolocation[1].longitude);
  }
}

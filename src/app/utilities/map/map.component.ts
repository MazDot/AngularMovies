import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { Icon, LeafletMouseEvent, Marker, divIcon, icon, latLng, marker, tileLayer } from 'leaflet';
import { coordinateMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  greenIcon = L.icon({
    iconUrl: "https://toppng.com/uploads/preview/map-marker-icon-600x-map-marker-11562939743ayfahlvygl.png",

    iconSize:     [24, 40], // size of the icon
    iconAnchor:   [12, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude], {icon: this.greenIcon}));
  }

  @Input()
  initialCoordinates: coordinateMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinateMap>();

  options = {
    layers: [
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 18, 
        attribution: 'Angular Movies' 
      })
    ],
    zoom: 14,
    center: latLng(35.782764294551555, 51.41412734985352)
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({longitude, latitude});
    this.layers=[];
    this.layers.push(marker([latitude, longitude], {icon: this.greenIcon}));
    this.onSelectedLocation.emit({latitude, longitude});
  }

}

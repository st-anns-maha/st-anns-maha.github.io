import { Component, OnInit, OnDestroy } from '@angular/core';
declare var $;
declare var ol: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  map: any;
  latitude = 18.7820754;
  longitude = 73.872056;
  tooltipString = '';

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 12
      })
    });
    this.addPoint(this.latitude, this.longitude);

    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([73.872056, 18.7820754]));
  }

  addPoint(lat: number, lng: number) {
    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: "assets/images/marker.png",
          title: "popup"
        }),
        text: new ol.style.Text({
          text: `St Ann's Sneha Bhavan`,
          offsetY: 25,
          fill: new ol.style.Fill({
              color: '#000'
          })
      })
      }),
      text: new ol.style.Style({
        
      })
    });
    this.map.addLayer(vectorLayer);
    }
  
    copyNumber(text) {
      this.tooltipString = 'Copied Helpline No!';
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      setTimeout(() => {
          this.tooltipString = '';       
      }, 2000);
    }

}

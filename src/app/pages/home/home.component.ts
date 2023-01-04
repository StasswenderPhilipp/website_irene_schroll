import { Component } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(config: NgbCarouselConfig) {
    config.interval = 15000;
  }
  images = [18, 400, 360, 330, 306, 159, 140, 152, 25].map((n) => `https://picsum.photos/id/${n}/1950/450`);
  serviceImages = [330, 306, 159, 140, 152, 25].map((n) => `https://picsum.photos/id/${n}/250/150`);

}

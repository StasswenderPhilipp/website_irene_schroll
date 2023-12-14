import { Component } from '@angular/core';
import {VERSION} from "@angular/cdk";
import lgZoom from 'lightgallery/plugins/zoom';
import {BeforeSlideDetail} from "lightgallery/lg-events";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  serviceImages = [330, 306, 159, 140, 152, 25].map((n) => `https://picsum.photos/id/${n}/250/150`);
}

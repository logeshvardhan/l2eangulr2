import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ng2-bootstrap/carousel';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.css'],
	providers: [{provide: CarouselConfig, useValue: {interval: 3000, noPause: true}}]
})
export class SliderComponent implements OnInit {
	title = 'slider works';
	constructor() { }

	ngOnInit() {
	}

}

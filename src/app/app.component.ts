import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo: ElementRef<HTMLVideoElement>;
  name = 'Angular';
  images = Array.from(Array(20).keys());

  constructor() {}

  ngAfterViewInit() {
    this.heroVideo.nativeElement.muted = true;
  }
}

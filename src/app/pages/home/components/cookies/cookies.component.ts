import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimationService } from '@core/services/animation.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.less']
})
export class CookiesComponent implements OnInit, OnDestroy {
  constructor(
    private animationService: AnimationService
  ) { }

  ngOnInit() {
    this.animationService.makeNavbarTransparent();
    this.animationService.makeNavbarFontLight();
  }

  ngOnDestroy() {
    this.animationService.makeNavbarSolid();
    this.animationService.makeNavbarFontDark();
  }
}

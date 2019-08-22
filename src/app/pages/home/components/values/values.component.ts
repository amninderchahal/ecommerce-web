import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimationService } from '@core/services/animation.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.less']
})
export class ValuesComponent implements OnInit, OnDestroy {
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

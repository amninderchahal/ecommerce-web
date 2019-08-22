import { Component, OnInit } from '@angular/core';
import { ConstantService } from '@core/services/constant.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  public constant;
  constructor(private constantService: ConstantService) {
    this.constant = constantService.get();
  }
  ngOnInit() {}
}

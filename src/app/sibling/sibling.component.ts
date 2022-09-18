import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-sibling',
  templateUrl: 'sibling.component.html',
})
export class SiblingComponent implements OnInit {
  siblingMsg;
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    const data = this.sharedService.getData();
    data.subscribe((val) => {
      this.siblingMsg = val;
    });
  }
  submitMessage() {
    this.sharedService.setData({
      message: 'Gaurav Bankoti',
    });
  }
}

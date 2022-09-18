import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: 'parent.component.html',
})
export class ParentComponent implements OnInit, AfterViewInit {
  message: String;
  childMsg: String;
  @ViewChild(ChildComponent) childComponentMsg;
  session: number;
  subData;
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.message = 'hello!';
    const x = this.sharedService.getData();
    x.subscribe((val) => {
      console.log(val);
      this.subData = val;
    });
  }

  ngAfterViewInit() {
    this.session = this.childComponentMsg.sessionId;
  }
  childMessage(val) {
    this.childMsg = val;
  }
}

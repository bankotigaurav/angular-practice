import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html',
})
export class ChildComponent implements OnInit {
  @Input() messageToChild;
  sessionId = Math.random();
  loginForm: FormGroup;

  @Output() messageToParent = new EventEmitter<string>();

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.messageToParent.emit('Hi!');
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginFormSubmit() {
    console.log(this.loginForm.value);
  }
}

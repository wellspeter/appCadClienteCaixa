import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {NgbAlert, NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject } from 'rxjs';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}
];

@Component({
  selector: 'app-messagens',
  templateUrl: './messagens.component.html',
  styleUrls: ['./messagens.component.css']
})
export class MessagensComponent implements OnInit {

  private _alert = new Subject<string>();

  @Input() type: string = '';
  @Input() messageInterna: string = '';

  staticAlertClosed = false;

  @ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

  constructor(alertConfig: NgbAlertConfig) {
    alertConfig.type = this.type;
    alertConfig.dismissible = false;
   }

  ngOnInit(): void {
    setTimeout(() => this.staticAlert.close(), 5000);

    this._alert.subscribe(message => this.messageInterna = message);
    this._alert.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });

  }

  public changeSuccessMessage() { 
    this._alert.next(`${new Date()} - Message successfully changed.`); 
  }

}

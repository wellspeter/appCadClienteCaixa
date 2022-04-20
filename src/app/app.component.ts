import { Component, OnDestroy, OnInit, VERSION, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { fromEvent, merge, of, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'appCadClienteCaixa';
  networkStatus: any;
  networkStatus$: Subscription = Subscription.EMPTY;

  private _alert= new Subject<string>();

  textMessage:string = '';
  typeAlert:string = '';

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

  ngOnInit(): void {
    this.checkNetworkStatus();

    this._alert.subscribe(message => this.textMessage = message);
    this._alert.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.networkStatus$.unsubscribe();
  }

  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    )
      .pipe(map(() => navigator.onLine))
      .subscribe(status => {
        console.log('status', status);
        if(status){
          this._alert.next('Onlien');
        }else{
          this._alert.next('Tentando reconectar - tudo feito sera enviado posteriormente.' );
        }
        
        this.networkStatus = status;
      });
  }

}

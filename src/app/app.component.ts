import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NgxSpinnerService } from 'ngx-spinner';
import { StateService } from './state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularkonce';
  // rxjs
  public data$: Observable<any>;
  public name$: Observable<any>;

  constructor(
    private spinnerService: NgxSpinnerService,
    public stateservice: StateService
  ) {}

  ngOnInit() {
    this.spinner();

    // rxjs
    this.data$ = this.stateservice.select('data');

    //call the method that include state managment
    this.addData();
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

  addData() {
    this.stateservice.dispatch({ key: 'data', payload: ['data'] });
  }
}

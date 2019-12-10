import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <br/>
    <div class="container"> 
      <div>
        <h1> {{ pageTitle }} </h1>
        <pm-products></pm-products>
      </div>
    </div>
  `
})

export class AppComponent{
  pageTitle: string = `Que Product Management`;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  value = {
    label: '阿牛',
    value: 'niu'
  };
  list = [
    {
      label: '阿牛',
      value: 'niu'
    },
    {
      label: '是男的',
      value: 'nande'
    },
    {
      label: '打工的',
      value: 'dagongde'
    },
  ];
  handle(event: any): void {
    this.value = event;
    console.log(event, this.value);

  }
}

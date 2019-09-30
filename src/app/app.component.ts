import { Component, Renderer2, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="idDiv">Hello world</div>
  <div class="idDiv11">Hello world1</div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  list: any;
  constructor(private eltRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {

   this.renderer.setStyle(this.renderer.selectRootElement('.idDiv'), 'color', 'red');
    this.renderer.setProperty(this.renderer.selectRootElement('.idDiv'), 'innerHTML', 'fsfsfsffsfs');



  }

  // handle(socketData: any){
  //   let currentTop = //get;
  //   convert data to list;
  //   list = socketData;
  //   //set currentTop to new element;
  // }
}

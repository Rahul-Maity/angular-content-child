import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild('para')
  paraEl!: ElementRef;
  clickCheck() {
    console.log(this.paraEl.nativeElement);
  }
}

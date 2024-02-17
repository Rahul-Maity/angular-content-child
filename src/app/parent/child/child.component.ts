import { Component, ContentChild, ContentChildren, ElementRef, QueryList} from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ContentChild('para')
  paragraphEl !: ElementRef;

  @ContentChildren('para')paraElements!:QueryList<ElementRef>


  @ContentChild(TestComponent) testEl!: TestComponent;
  
  @ContentChildren(TestComponent)testElements !:QueryList<TestComponent>
  StyleParagraph() {
    // console.log(this.paragraphEl)
    // console.log(this.testEl)
    // this.paraElements.forEach((el) => {
    //   console.log(el.nativeElement)
    // })

    this.testElements.forEach((el) => {
      console.log(el)
    })
  }
}


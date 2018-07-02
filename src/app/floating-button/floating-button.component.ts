import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent {

  @Input() icon: string;
  @Input() color: string;
  @Input() position: string;
  @Input() isFa: false;
  @Input() title: string;


  getClass() {
    switch (parseInt(this.position)) {
      case 6:
        return 'floating-sixth-button';
      case 5:
        return 'floating-fifth-button';
      case 4:
        return 'floating-fourth-button';
      case 3:
        return 'floating-third-button';
      case 2:
        return 'floating-second-button';
      case 1:
      default:
        return 'floating-button';
    }
  }
}

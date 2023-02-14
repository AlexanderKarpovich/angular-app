import { Component } from '@angular/core';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'global-error',
  templateUrl: './globalError.component.html',
  styleUrls: ['./globalError.component.scss']
})

export class GlobalErrorComponent {
  constructor(public errorService: ErrorService) { }
}

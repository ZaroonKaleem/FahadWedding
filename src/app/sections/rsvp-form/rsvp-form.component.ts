import { AfterViewInit, Component, ViewEncapsulation, inject } from '@angular/core';
import { TildaService } from '../../tilda.service';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrl: './rsvp-form.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class RsvpFormComponent implements AfterViewInit {
  private readonly tilda = inject(TildaService);

  ngAfterViewInit(): void {
    this.tilda.popup('2487446233');
  }
}

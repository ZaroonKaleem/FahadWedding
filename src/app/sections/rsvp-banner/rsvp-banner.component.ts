import { AfterViewInit, Component, ViewEncapsulation, inject } from '@angular/core';
import { TildaService } from '../../tilda.service';

@Component({
  selector: 'app-rsvp-banner',
  templateUrl: './rsvp-banner.component.html',
  styleUrl: './rsvp-banner.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class RsvpBannerComponent implements AfterViewInit {
  private readonly tilda = inject(TildaService);

  ngAfterViewInit(): void {
    this.tilda.zeroBlock('2487446223');
  }
}

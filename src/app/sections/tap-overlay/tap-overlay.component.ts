import { AfterViewInit, Component, ViewEncapsulation, inject } from '@angular/core';
import { TildaService } from '../../tilda.service';

@Component({
  selector: 'app-tap-overlay',
  templateUrl: './tap-overlay.component.html',
  styleUrl: './tap-overlay.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TapOverlayComponent implements AfterViewInit {
  private readonly tilda = inject(TildaService);

  ngAfterViewInit(): void {
    this.tilda.loadScript('scripts/tap-overlay.js');
  }
}

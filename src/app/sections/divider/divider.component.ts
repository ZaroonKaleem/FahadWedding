import { AfterViewInit, Component, ViewEncapsulation, inject } from '@angular/core';
import { TildaService } from '../../tilda.service';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DividerComponent implements AfterViewInit {
  private readonly tilda = inject(TildaService);

  ngAfterViewInit(): void {
    this.tilda.zeroBlock('2487446163');
  }
}

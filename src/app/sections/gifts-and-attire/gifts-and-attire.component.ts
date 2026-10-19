import { AfterViewInit, Component, ViewEncapsulation, inject } from '@angular/core';
import { TildaService } from '../../tilda.service';

@Component({
  selector: 'app-gifts-and-attire',
  templateUrl: './gifts-and-attire.component.html',
  styleUrl: './gifts-and-attire.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class GiftsAndAttireComponent implements AfterViewInit {
  private readonly tilda = inject(TildaService);

  ngAfterViewInit(): void {
    this.tilda.zeroBlock('2487446183');
  }
}

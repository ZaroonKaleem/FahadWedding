import { AfterViewInit, Component, ViewEncapsulation, inject } from '@angular/core';
import { TildaService } from '../../tilda.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements AfterViewInit {
  private readonly tilda = inject(TildaService);

  ngAfterViewInit(): void {
    this.tilda.zeroBlock('2487446253');
  }
}

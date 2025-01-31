import { Component } from '@angular/core';

import { SidenavComponent } from '../components/sidenav/sidenav.component';

@Component({
  selector: 'app-layout',
  imports: [SidenavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
}

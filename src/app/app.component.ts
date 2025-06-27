import { Component } from '@angular/core';
import { DesktopUiLandingComponent } from "./components/desktop-ui-landing/desktop-ui-landing.component";
import { AdminPanelComponent } from "./components/admin-panel/admin-panel.component";
import { MobileUiComponent } from "./components/mobile-ui/mobile-ui.component";

@Component({
  selector: 'app-root',
  imports: [DesktopUiLandingComponent, AdminPanelComponent, MobileUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'verkko-ui-preview';
}

import { Component, inject } from '@angular/core';
import { DesktopUiLandingComponent } from "./components/desktop-ui-landing/desktop-ui-landing.component";
import { AdminPanelComponent } from "./components/admin-panel/admin-panel.component";
import { MobileUiComponent } from "./components/mobile-ui/mobile-ui.component";
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DesktopUiLandingComponent, AdminPanelComponent, MobileUiComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  appService = inject(AppService)

  constructor(){}

  get mode(){
    return this.appService.getMode();
  }

}

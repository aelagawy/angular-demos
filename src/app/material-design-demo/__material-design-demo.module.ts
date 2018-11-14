import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatButtonToggleModule, MatTreeModule, MatTreeNode } from '@angular/material';

import { MaterialDesignDemoComponent } from './material-design-demo.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTreeModule
  
  ],
  declarations: [
    MaterialDesignDemoComponent
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTreeModule
  ]
})
export class __MaterialDesignDemoModule { }

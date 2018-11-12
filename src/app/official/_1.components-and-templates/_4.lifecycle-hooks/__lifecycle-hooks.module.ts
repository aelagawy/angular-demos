import { FormsModule } from '@angular/forms';
import { DoCheckComponent, DoCheckParentComponent } from './do-check.component';
import { CounterComponent, CounterParentComponent } from './counter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleHooksComponent } from './_lifecycle-hooks.component';
import { AfterContentParentComponent, AfterContentComponent, ChildContentComponent } from './after-content.component';
import { AfterViewParentComponent, AfterViewComponent, ChildViewComponent } from './after-view.component';
import { OnChangesComponent, OnChangesParentComponent } from './on-changes.component';
import { PeekABooComponent, PeekABooParentComponent } from './peek-a-boo.component';
import { SpyParentComponent } from './spy.component';
import { SpyDirective } from './spy.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    LifeCycleHooksComponent,
    ChildContentComponent,
    AfterContentComponent,
    AfterContentParentComponent,
    ChildViewComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    CounterComponent,
    CounterParentComponent,
    DoCheckComponent,
    DoCheckParentComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    SpyParentComponent,
    SpyDirective
  ]
})
export class __LifecycleHooksModule { }

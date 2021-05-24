import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerDashboardService } from './container/passenger-dashboard/passenger-dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { PassengerViewerComponent } from './container/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

// Initial approach to get passengers alone [ if u go to /passengers, u get this rendered]
// const routes: Routes = [
//   {path: 'passengers', component: PassengerDashboardComponent}
// ]


// How to get passengers with children (individual passenger details) ?

const routes: Routes = [
  {path: 'passengers', 
  children:[
    {path: '', component: PassengerDashboardComponent},
    {path: ':id', component: PassengerViewerComponent}
  ]
}
]



@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatSliderModule,
    MatDividerModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerViewerComponent
  ],
  providers: [
    [PassengerDashboardService]
  ]
})
export class PassengerDashboardModule { }

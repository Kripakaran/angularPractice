import { ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';


interface nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {

   
  nav : nav[]= [
    {
      link: '/',
      name: 'Home',
      exact: true  
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: true
    }
  ]

    }

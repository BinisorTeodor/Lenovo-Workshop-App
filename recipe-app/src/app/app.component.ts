import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  lastName = "Andrei";
  firstName ="Matei";
  temp = this.firstName;
  title = 'Aplicatie Angular';

  showMessage() {
      this.firstName = this.lastName;
      this.lastName = this.temp;
      this.temp=this.firstName;
  }
}

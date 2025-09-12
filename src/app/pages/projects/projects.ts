import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { RouterModule } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-projects',
  imports: [RouterModule,Header, Footer, Cta],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}

import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Cta } from '../../components/cta/cta';
import { RouterModule } from '@angular/router';
// import { routes } from '../../app.routes';

@Component({
  selector: 'app-skills',
  imports: [RouterModule, Header, Footer, Cta],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
// RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, 80] })
export class Skills {

}

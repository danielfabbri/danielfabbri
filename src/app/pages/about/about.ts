import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-about',
  imports: [Header,Footer,Cta],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}

import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { Cta } from '../../components/cta/cta';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-homepage',
  imports: [
    CommonModule,
    Header,Footer,Cta],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  imageUrl = 'assets/daniel_fabbri.png';
}

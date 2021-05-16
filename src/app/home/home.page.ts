import { Component, OnInit } from '@angular/core';
import {SportService} from '../services/sport.service'
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'MyApp',
  srcDir: 'src'
};
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
SportData:any = [];
  constructor(private sportService:SportService) {}

  ngOnInit(){
    this.sportService.GetSportInfo().subscribe(
      (data)=>{
      this.SportData =data;

      }
    );
  }
}

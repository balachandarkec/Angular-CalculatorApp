import { Component, OnInit } from '@angular/core';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  home_title: string="Home Page 1";
  image_path: string="assets/img/nature.jpeg";
  dynamicContent:string="";

  changeTitle():void{

    if(this.home_title.trim()=== new String("Home Page 1").valueOf()){

    this.home_title="dynamic homepage";
    this.image_path="assets/img/nature1.jpeg";
  }else{

   this.home_title ="Home Page 1";
    this.image_path="assets/img/nature.jpeg";

  }
 }
}











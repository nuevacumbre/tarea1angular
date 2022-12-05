import { Component, OnInit } from '@angular/core';
import { ListserviceService } from 'src/app/service/listservice.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  constructor( private myservice: ListserviceService ) { }

  ngOnInit() {
    console.log("lista de juegos");
    this.getGames();
  }

  getGames(){
    console.log(this.myservice.getData());
  }

}

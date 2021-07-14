import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  characters = []
  contador = 0

  constructor(
    private http: HttpClient
    ) {

     }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res => {
      console.log(res)
      this.characters = res.results;
    })
  }

  buscar($event){

  }



/*
  loadData(event) {
    setTimeout(() => {
      console.log('Done');


      if (data.length == 1000) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }


      this.characters.push()


    }, 100);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
*/
}

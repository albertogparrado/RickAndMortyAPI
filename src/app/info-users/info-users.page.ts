import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-info-users',
  templateUrl: './info-users.page.html',
  styleUrls: ['./info-users.page.scss'],
})
export class InfoUsersPage implements OnInit {

  personajeID: string;
  character : any;

  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.personajeID = this.activateRoute.snapshot.paramMap.get('id')
    console.log('El ID del personaje es: ' + this.personajeID)

    this.http.get('https://rickandmortyapi.com/api/character/' + this.personajeID)
    .subscribe(res =>
      this.character = res
    )

  }

}

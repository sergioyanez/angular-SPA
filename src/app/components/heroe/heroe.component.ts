import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../..//servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

 heroe:any = {};

  constructor(  private activatedRoute:ActivatedRoute,
                private _heroeService:HeroesService,
                private router:Router ) {

    this.activatedRoute.params.subscribe(params=>{

      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    })
   }

  ngOnInit(): void {

  }

  regresar(){
    this.router.navigate(['/heroes']);
  }

}

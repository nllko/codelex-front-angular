import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharacterService} from "../../shared/services/character.service";
import {map, Observable} from "rxjs";
import {Character} from "../../shared/models/character.model";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  //characters:any = [];
  //charactersSubscription?: Subscription;
  characters$: Observable<Character[]> = this.characterService.getCharacters().pipe(map(charactersResponse => {
    return charactersResponse.results;
  }));

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    // this.charactersSubscription = this.characterService.getCharacters().subscribe(charactersResponse=>{
    //   this.characters = charactersResponse.results;
    //   console.log(charactersResponse)
    // })
  }

  ngOnDestroy(): void {
    // this.charactersSubscription?.unsubscribe();
  }

}

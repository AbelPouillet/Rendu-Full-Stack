import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ICharacter } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.scss'],
  providers: [
    CharacterService
  ]
})
export class CharacterEditComponent {

  formGroup: FormGroup;
  _id: any;
  constructor(
    private characterService: CharacterService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      firstName: [undefined, [Validators.required, Validators.minLength(3)]],
      lastName: [undefined, Validators.required],
      birthYear: []
    });
    this.reset();
    this._id = this.route.snapshot.paramMap.get('id');
    this.formGroup.controls.firstName.valueChanges
      .subscribe(firstName => {
        this.formGroup.patchValue({
          lastName: firstName.split('').reverse().join('')
        });
      });
  }

  reset(): void {
    this.formGroup.reset({
      birthYear: 1990
    });
  }

  save(): void {
    if (this.formGroup.valid) {
      if (this._id) {
        const character: ICharacter = {
          _id: this._id,
          firstName: this.formGroup.value.firstName,
          lastName: this.formGroup.value.lastName,
          birthYear: this.formGroup.value.birthYear
        };
        this.characterService.update(character).subscribe(() => {this.router.navigateByUrl('/characters');} );
      }
      else {
        const character: ICharacter = {
          _id: '0',
          firstName: this.formGroup.value.firstName,
          lastName: this.formGroup.value.lastName,
          birthYear: this.formGroup.value.birthYear
        };
        this.characterService.save(character).subscribe(() => {this.router.navigateByUrl('/characters');} );
      }
    }
  }
}

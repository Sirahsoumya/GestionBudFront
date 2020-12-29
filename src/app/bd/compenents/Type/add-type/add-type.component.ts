import { Component, OnInit } from '@angular/core';
import {PerimetreService} from '../../../services/perimetre.service';
import {Router} from '@angular/router';
import {Type} from '../../../modules/Type';
import {TypeService} from '../../../services/type.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
  type: Type;
  constructor(private typeservice: TypeService, private router: Router) {
    this.type = new Type();
  }

  ngOnInit() {
  }
  onSubmitType() {
    console.log(this.type.idType);
    this.typeservice.saveType(this.type).subscribe(result => this.gotoListType());

  }
  gotoListType(){
    this.router.navigate(['/listType']);
  }
}

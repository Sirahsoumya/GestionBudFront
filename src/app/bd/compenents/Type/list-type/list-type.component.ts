import { Component, OnInit } from '@angular/core';
import {Type} from '../../../modules/Type';
import {TypeService} from '../../../services/type.service';
import {Perimetre} from '../../../modules/Perimetre';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.css']
})
export class ListTypeComponent implements OnInit {
  types: Type[];
  type: Type;
  constructor(private typeService: TypeService, private route: ActivatedRoute, private router: Router) {
    this.type = new Type();
  }

  ngOnInit() {
    this.typeService.getAllType().subscribe(data => {
      this.types = data;
    });
  }
  delType(type: Type): void {
    this.typeService.deleteType(type).subscribe((response) => {
      this.ngOnInit();
    });
  }
  /*
  //pour modifier
  findTypeById(type: Type) {
    //const idtyp = this.route.snapshot.paramMap.get('idtyp');
    console.log("findById ca marceh ou pas");
    console.log(this.type.idType);
    this.typeService.findByIdType(type).subscribe(result => this.gotoFormType());

  }
  gotoFormType(){
    this.router.navigate(['/updateType']);
  }*/

}

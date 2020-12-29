import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../../services/type.service";
import {Type} from "../../../modules/Type";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {
  type: any;


  constructor(private typeService: TypeService, private router: Router,private route: ActivatedRoute) {
    this.type = new Type();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.typeService.findByIdType(id).subscribe(data => {
      this.type = data;
    });
  }


  onSubmitUpdateType() {
    console.log(this.type);
    this.typeService.updateTyp(this.type).subscribe(result => this.gotoNewListType());
  }
  gotoNewListType() {
    this.router.navigate(['/listType']);
  }

}

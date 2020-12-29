import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Compagne} from '../../../modules/Compagne';
import {CompagneService} from '../../../services/compagne.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-compagne',
  templateUrl: './add-compagne.component.html',
  styleUrls: ['./add-compagne.component.css']
})
export class AddCompagneComponent implements OnInit {
   files: File[];
  public formData = new FormData();
  ReqJson: any = {};
  compagne: Compagne;

  constructor(private compagneService: CompagneService, private router: Router, private http: HttpClient) {
    this.compagne = new Compagne();

  }
  ngOnInit(): void {
  }

  onSubmitCompagne() {
    console.log('onSubmitOrientation test !!');
    console.log(this.compagne);

    this.compagneService.saveCompagne(this.compagne).subscribe(result => this.gotoCompagne());

  }
  gotoCompagne() {
    this.router.navigate(['/listCompagne']);

  }
/*
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  /*uploadFileToActivity() {
    this.compagneService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }*/

  uploadFiles( file ) {
    console.log( 'file', file );
    for ( let i = 0; i < file.length; i++ ) {
      this.formData.append( "file", file[i], file[i]['name'] );
    }
  }
  RequestUpload() {
    this.ReqJson["patientId"] = "12";
    this.ReqJson["requesterName"] = "test1";
    this.ReqJson["requestDate"] = "1/1/2019";
    this.ReqJson["location"] = "INDIA";
    this.formData.append( 'Info', JSON.stringify( this.ReqJson ) );
    this.http.post( '/Request', this.formData ).subscribe(( ) => {});
  }


}

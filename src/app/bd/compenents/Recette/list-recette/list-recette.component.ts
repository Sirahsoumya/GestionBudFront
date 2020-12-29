import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Type} from '../../../modules/Type';
import {Recette} from '../../../modules/Recette';
import {RecetteService} from '../../../services/recette.service';

import * as jsPDF from 'jspdf';



@Component({
  selector: 'app-list-recette',
  templateUrl: './list-recette.component.html',
  styleUrls: ['./list-recette.component.css']
})
export class ListRecetteComponent implements OnInit {
  // @ts-ignore
  @ViewChild('content') content: ElementRef;
  recettes: Recette[];
  type: Type = new Type();
  constructor(private recetteService: RecetteService) {

  }

  ngOnInit() {
    this.recetteService.getAllRecette().subscribe(data => {
      this.recettes = data;
    });
  }
  deleteRecette(recette: Recette): void {
    console.log(this.recetteService);
    this.recetteService.deleteRecette(recette).subscribe((response) => {
      this.ngOnInit();
    });
  }


  public SavePDF(): void {
    const doc = new jsPDF();
    const specialElememtHandlers = {
      '#editor'(element, renderer) {
        return true;
      }
    };

    doc.fromHTML(this.content.nativeElement.innerHTML, 20, 20, {
      width: 200,
      elementHandlers: specialElememtHandlers
    });
    doc.save('Recette.pdf');}
}

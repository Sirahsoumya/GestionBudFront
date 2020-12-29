import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DetailProjetService} from '../../../services/detail-projet.service';
import {Projet} from '../../../modules/projet';
import {ProjetService} from '../../../services/projet.service';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrls: ['./detail-projet.component.css']
})
export class DetailProjetComponent implements OnInit {
  projet: any;
  // @ts-ignore
  @ViewChild('content') content: ElementRef;

  projets: Projet[];
  constructor(private route: ActivatedRoute, private detailProjetService: DetailProjetService) {
    this.projet = new Projet();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.detailProjetService.findByIdProjet(id).subscribe(data => {
     this.projet = data;
     console.log(data);
    });
  }
  public ExportPDF(): void {
    const doc = new jsPDF();
    const specialElememtHandlers = {
      '#editor'(element, renderer) {
        return true;
      }
    };

    /*doc.fromHTML(this.content.nativeElement.innerHTML, 40, 40, {
      width: 200,
      elementHandlers: specialElememtHandlers
    });
    doc.save('Projet.pdf');*/
    doc.addHTML(this.content.nativeElement, function() {
      doc.save("Projet.pdf");
    });
  }

}

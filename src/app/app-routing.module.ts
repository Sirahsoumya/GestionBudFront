import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './master/test/test.component';
import {LoginComponent} from './master/login/login.component';
import {MasterComponent} from './master/master/master.component';
import {GestionOrientationComponent} from './bd/compenents/Orientation/gestion-orientation/gestion-orientation.component';
import {ListOrientationComponent} from './bd/compenents/Orientation/list-orientation/list-orientation.component';
import {ListProgrammeComponent} from './bd/compenents/Programme/list-programme/list-programme.component';
import {GestionProgrammeComponent} from './bd/compenents/Programme/gestion-programme/gestion-programme.component';
import {ListMarcheComponent} from './bd/compenents/marche/list-marche/list-marche.component';
import {AddMarcheComponent} from './bd/compenents/marche/add-marche/add-marche.component';
import {AddProjetComponent} from './bd/compenents/projet/add-projet/add-projet.component';
import {ListProjetComponent} from './bd/compenents/projet/list-projet/list-projet.component';
import {AddSponsorComponent} from './bd/compenents/Sponsor/add-sponsor/add-sponsor.component';
import {ListSponsorComponent} from './bd/compenents/Sponsor/list-sponsor/list-sponsor.component';
import {AddPartenaireComponent} from './bd/compenents/Partenaire/add-partenaire/add-partenaire.component';
import {ListPartenaireComponent} from './bd/compenents/Partenaire/list-partenaire/list-partenaire.component';
import {AddIndicateurComponent} from './bd/compenents/Indicateur/add-indicateur/add-indicateur.component';
import {ListIndicateurComponent} from './bd/compenents/Indicateur/list-indicateur/list-indicateur.component';
import {ListSourcheBudgetComponent} from './bd/compenents/SourceBudget/list-sourcheBudget/list-sourche-budget.component';
import {AddSourcheBudgetComponent} from './bd/compenents/SourceBudget/add-sourcheBudget/add-sourche-budget.component';
import {AddPerimetreComponent} from './bd/compenents/Perimetre/add-perimetre/add-perimetre.component';
import {ListPerimetreComponent} from './bd/compenents/Perimetre/list-perimetre/list-perimetre.component';
import {ListStatutProjetComponent} from './bd/compenents/statutProjet/list-statut-projet/list-statut-projet.component';
import {AddStatutProjetComponent} from './bd/compenents/statutProjet/add-statut-projet/add-statut-projet.component';
import {ListDevisionComponent} from './bd/compenents/division/list-devision/list-devision.component';
import {AddDevisionComponent} from './bd/compenents/division/add-devision/add-devision.component';
import {AddFonctionnaireComponent} from './bd/compenents/fonctionnaire/add-fonctionnaire/add-fonctionnaire.component';
import {ListFonctionnaireComponent} from './bd/compenents/fonctionnaire/list-fonctionnaire/list-fonctionnaire.component';
import {AddTypeComponent} from './bd/compenents/Type/add-type/add-type.component';
import {ListTypeComponent} from './bd/compenents/Type/list-type/list-type.component';
import {AddRecetteComponent} from './bd/compenents/Recette/add-recette/add-recette.component';
import {ListRecetteComponent} from './bd/compenents/Recette/list-recette/list-recette.component';
import {ListMandatComponent} from './bd/compenents/Mandat/list-mandat/list-mandat.component';
import {AddMandatComponent} from './bd/compenents/Mandat/add-mandat/add-mandat.component';
import {AddStatutDemandeComponent} from './bd/compenents/StatutDemande/add-statut-demande/add-statut-demande.component';
import {ListStatutDemandeComponent} from './bd/compenents/StatutDemande/list-statut-demande/list-statut-demande.component';
import {AddCompagneComponent} from './bd/compenents/Compagne/add-compagne/add-compagne.component';
import {ListCompagneComponent} from './bd/compenents/Compagne/list-compagne/list-compagne.component';
import {AddDepenseComponent} from './bd/compenents/Depense/add-depense/add-depense.component';
import {ListDepenseComponent} from './bd/compenents/Depense/list-depense/list-depense.component';
import {AddDemandeTransfertComponent} from './bd/compenents/DemandeTransfert/add-demande-transfert/add-demande-transfert.component';
import {ListDemandeTransfertComponent} from './bd/compenents/DemandeTransfert/list-demande-transfert/list-demande-transfert.component';
import {ListDemandeBudgetComponent} from './bd/compenents/DemandeBudget/list-demande-budget/list-demande-budget.component';
import {AddDemandeBudgetComponent} from './bd/compenents/DemandeBudget/add-demande-budget/add-demande-budget.component';
import {DetailProjetComponent} from './bd/compenents/projet/detail-projet/detail-projet.component';
import {UpdateTypeComponent} from "./bd/compenents/Type/update-type/update-type.component";
import {UpdateCompagneComponent} from "./bd/compenents/Compagne/update-compagne/update-compagne.component";
import {UpdateStatutProjetComponent} from "./bd/compenents/statutProjet/update-statut-projet/update-statut-projet.component";
import {UpdateStatutDemandeComponent} from "./bd/compenents/StatutDemande/update-statut-demande/update-statut-demande.component";
import {UpdateDivisionComponent} from "./bd/compenents/division/update-division/update-division.component";
import {UpdatePerimtreComponent} from "./bd/compenents/Perimetre/update-perimtre/update-perimtre.component";
import { UpdateOrientationComponent } from './bd/compenents/Orientation/update-orientation/update-orientation.component';
import {UpdateProgrammeComponent} from "./bd/compenents/Programme/update-programme/update-programme.component";
import {UpdateMandatComponent} from "./bd/compenents/Mandat/update-mandat/update-mandat.component";
import {UpdateDepenseComponent} from "./bd/compenents/Depense/update-depense/update-depense.component";
import {UpdateMarcheComponent} from "./bd/compenents/marche/update-marche/update-marche.component";
import {UpdateRecetteComponent} from "./bd/compenents/Recette/update-recette/update-recette.component";
import {UpdateSourceBudgetComponent} from "./bd/compenents/SourceBudget/update-source-budget/update-source-budget.component";
import {UpdateIndicateurComponent} from "./bd/compenents/Indicateur/update-indicateur/update-indicateur.component";
import {UpdateProjetComponent} from "./bd/compenents/projet/update-projet/update-projet.component";
import {UpdateSponsorComponent} from "./bd/compenents/Sponsor/update-sponsor/update-sponsor.component";
import {UpdatePartenaireComponent} from "./bd/compenents/Partenaire/update-partenaire/update-partenaire.component";
import {UpdateFonctionnaireComponent} from "./bd/compenents/fonctionnaire/update-fonctionnaire/update-fonctionnaire.component";
import {UpdateDemandeBudgetComponent} from "./bd/compenents/DemandeBudget/update-demande-budget/update-demande-budget.component";
import {UpdateDemandeTransfertComponent} from "./bd/compenents/DemandeTransfert/update-demande-transfert/update-demande-transfert.component";
import {ChartsComponent} from "./bd/compenents/projet/charts/charts.component";



const routes: Routes = [


  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '', component: MasterComponent, children: [
      {path: 'test', component: TestComponent},
      // <-----------urls gestion bedgetaire------------->
      {path: 'manageOrientation', component: GestionOrientationComponent},
      {path: 'listOrientation', component: ListOrientationComponent},
      {path: 'updateOrientation/:id', component: UpdateOrientationComponent},
      {path: 'manageProgramme', component: GestionProgrammeComponent},
      {path: 'listProgramme', component: ListProgrammeComponent},
      {path: 'updateProgramme/:id', component: UpdateProgrammeComponent},
      {path: 'manageMarche', component: AddMarcheComponent},
      {path: 'listMarche', component: ListMarcheComponent},
      {path: 'updateMarche/:id', component: UpdateMarcheComponent},
      {path: 'manageProjet', component: AddProjetComponent},
      {path: 'listProjet', component: ListProjetComponent},
      {path: 'updateProjet/:id', component: UpdateProjetComponent},
      {path: 'manageSponsor', component: AddSponsorComponent},
      {path: 'listSponsor', component: ListSponsorComponent},
      {path: 'updateSponsor/:id', component: UpdateSponsorComponent},
      {path: 'managePartenaire', component: AddPartenaireComponent},
      {path: 'listPartenaire', component: ListPartenaireComponent},
      {path: 'updatePartenaire/:id', component: UpdatePartenaireComponent},
      {path: 'manageIndicateur', component: AddIndicateurComponent},
      {path: 'listIndicateur', component: ListIndicateurComponent},
      {path: 'updateIndicateur/:id', component: UpdateIndicateurComponent},
      {path: 'manageSourceBudget', component: AddSourcheBudgetComponent},
      {path: 'listSourceBudget', component: ListSourcheBudgetComponent},
      {path: 'updateSourceBudget/:id', component: UpdateSourceBudgetComponent},
      {path: 'manageStatut', component: AddStatutProjetComponent},
      {path: 'listStatut', component: ListStatutProjetComponent},
      {path: 'updateStatutProjet/:id', component: UpdateStatutProjetComponent},
      {path: 'managePerimetre', component: AddPerimetreComponent},
      {path: 'listPerimetre', component: ListPerimetreComponent},
      {path: 'updatePerimetre/:id', component: UpdatePerimtreComponent},
      {path: 'manageFonctionnaire', component: AddFonctionnaireComponent},
      {path: 'listFonctionnaire', component: ListFonctionnaireComponent},
      {path: 'updateFonctionnaire/:id', component: UpdateFonctionnaireComponent},
      {path: 'manageDivision', component: AddDevisionComponent},
      {path: 'listDivision', component: ListDevisionComponent},
      {path: 'updateDivision/:id', component: UpdateDivisionComponent},
      {path: 'manageType', component: AddTypeComponent},
      {path: 'listType', component: ListTypeComponent},
      {path: 'updateType/:id', component: UpdateTypeComponent},
      {path: 'manageRecette', component: AddRecetteComponent},
      {path: 'listRecette', component: ListRecetteComponent},
      {path: 'updateRecette/:id', component: UpdateRecetteComponent},
      {path: 'manageMandat', component: AddMandatComponent},
      {path: 'listMandat', component: ListMandatComponent},
      {path: 'updateMandat/:id', component: UpdateMandatComponent},
      {path: 'manageStatutDemande', component: AddStatutDemandeComponent},
      {path: 'listStatutDemande', component: ListStatutDemandeComponent},
      {path: 'updateStatutDemande/:id', component: UpdateStatutDemandeComponent},
      {path: 'manageCompagne', component: AddCompagneComponent},
      {path: 'updateCompagne/:id', component: UpdateCompagneComponent},
      {path: 'listCompagne', component: ListCompagneComponent},
      {path: 'manageDepense', component: AddDepenseComponent},
      {path: 'listDepense', component: ListDepenseComponent},
      {path: 'updateDepense/:id', component: UpdateDepenseComponent},
      {path: 'manageDemandeTransfer', component: AddDemandeTransfertComponent},
      {path: 'listDemandeTransfert', component: ListDemandeTransfertComponent},
      {path: 'updateDemandeTransfert/:id', component: UpdateDemandeTransfertComponent},
      {path: 'manageDemandeBudget', component: AddDemandeBudgetComponent},
      {path: 'listDemandeBudget', component: ListDemandeBudgetComponent},
      {path: 'updateDemandeBudget/:id', component: UpdateDemandeBudgetComponent},
      {path: 'detailProjet', component: DetailProjetComponent},
      {path: 'detailProjet/:id', component: DetailProjetComponent},
      //graphe
      {path: 'projetCharts', component: ChartsComponent}

    ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

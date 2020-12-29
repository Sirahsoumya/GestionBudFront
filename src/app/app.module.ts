import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule, ThemeService} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './master/footer/footer.component';
import { NavbarComponent } from './master/navbar/navbar.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { HeaderContentComponent } from './master/header-content/header-content.component';
import { ContentComponent } from './master/content/content.component';
import { TestComponent } from './master/test/test.component';
import { LoginComponent } from './master/login/login.component';
import { MasterComponent } from './master/master/master.component';

import { GestionOrientationComponent } from './bd/compenents/Orientation/gestion-orientation/gestion-orientation.component';
import {FormsModule} from '@angular/forms';
import { ListOrientationComponent } from './bd/compenents/Orientation/list-orientation/list-orientation.component';

import {HttpClientModule} from '@angular/common/http';
import {OrientationService} from './bd/services/orientation.service';
import { GestionProgrammeComponent } from './bd/compenents/Programme/gestion-programme/gestion-programme.component';
import { ListProgrammeComponent } from './bd/compenents/Programme/list-programme/list-programme.component';
import { AddProjetComponent } from './bd/compenents/projet/add-projet/add-projet.component';
import { ListProjetComponent } from './bd/compenents/projet/list-projet/list-projet.component';
import { ListMarcheComponent } from './bd/compenents/marche/list-marche/list-marche.component';
import { AddMarcheComponent } from './bd/compenents/marche/add-marche/add-marche.component';
import {ProgrammeService} from './bd/services/programme.service';
import {MarcheService} from './bd/services/marche.service';
import {ProjetService} from './bd/services/projet.service';
import { AddSponsorComponent } from './bd/compenents/Sponsor/add-sponsor/add-sponsor.component';
import { ListSponsorComponent } from './bd/compenents/Sponsor/list-sponsor/list-sponsor.component';
import { ListPartenaireComponent } from './bd/compenents/Partenaire/list-partenaire/list-partenaire.component';
import { AddPartenaireComponent } from './bd/compenents/Partenaire/add-partenaire/add-partenaire.component';
import {SponsorService} from './bd/services/sponsor.service';
import {PartenaireService} from './bd/services/partenaire.service';
import { AddIndicateurComponent } from './bd/compenents/Indicateur/add-indicateur/add-indicateur.component';
import { ListIndicateurComponent } from './bd/compenents/Indicateur/list-indicateur/list-indicateur.component';
import { ListSourcheBudgetComponent } from './bd/compenents/SourceBudget/list-sourcheBudget/list-sourche-budget.component';
import { AddSourcheBudgetComponent } from './bd/compenents/SourceBudget/add-sourcheBudget/add-sourche-budget.component';
import {SourceBudgetService} from './bd/services/source-budget.service';
import {IndicateurService} from './bd/services/indicateur.service';
import { AddStatutProjetComponent } from './bd/compenents/statutProjet/add-statut-projet/add-statut-projet.component';
import { ListStatutProjetComponent } from './bd/compenents/statutProjet/list-statut-projet/list-statut-projet.component';
import { ListPerimetreComponent } from './bd/compenents/Perimetre/list-perimetre/list-perimetre.component';
import { AddPerimetreComponent } from './bd/compenents/Perimetre/add-perimetre/add-perimetre.component';
import {StatutProjetService} from './bd/services/statut-projet.service';
import {PerimetreService} from './bd/services/perimetre.service';
import { AddDevisionComponent } from './bd/compenents/division/add-devision/add-devision.component';
import { ListDevisionComponent } from './bd/compenents/division/list-devision/list-devision.component';
import { ListFonctionnaireComponent } from './bd/compenents/fonctionnaire/list-fonctionnaire/list-fonctionnaire.component';
import { AddFonctionnaireComponent } from './bd/compenents/fonctionnaire/add-fonctionnaire/add-fonctionnaire.component';
import {DivisionService} from './bd/services/division.service';
import {FonctionnaireService} from './bd/services/fonctionnaire.service';
import { AddTypeComponent } from './bd/compenents/Type/add-type/add-type.component';
import { ListTypeComponent } from './bd/compenents/Type/list-type/list-type.component';
import {TypeService} from './bd/services/type.service';
import { AddRecetteComponent } from './bd/compenents/Recette/add-recette/add-recette.component';
import { ListRecetteComponent } from './bd/compenents/Recette/list-recette/list-recette.component';
import {RecetteService} from './bd/services/recette.service';
import { AddMandatComponent } from './bd/compenents/Mandat/add-mandat/add-mandat.component';
import { ListMandatComponent } from './bd/compenents/Mandat/list-mandat/list-mandat.component';
import {MandatService} from './bd/services/mandat.service';
import { AddStatutDemandeComponent } from './bd/compenents/StatutDemande/add-statut-demande/add-statut-demande.component';
import { ListStatutDemandeComponent } from './bd/compenents/StatutDemande/list-statut-demande/list-statut-demande.component';
import {StatutDemandeService} from './bd/services/statut-demande.service';
import { AddCompagneComponent } from './bd/compenents/Compagne/add-compagne/add-compagne.component';
import { ListCompagneComponent } from './bd/compenents/Compagne/list-compagne/list-compagne.component';
import {CompagneService} from './bd/services/compagne.service';
import { AddDepenseComponent } from './bd/compenents/Depense/add-depense/add-depense.component';
import { ListDepenseComponent } from './bd/compenents/Depense/list-depense/list-depense.component';
import {DepenseService} from './bd/services/depense.service';
import { AddDemandeBudgetComponent } from './bd/compenents/DemandeBudget/add-demande-budget/add-demande-budget.component';
import { ListDemandeBudgetComponent } from './bd/compenents/DemandeBudget/list-demande-budget/list-demande-budget.component';
import { ListDemandeTransfertComponent } from './bd/compenents/DemandeTransfert/list-demande-transfert/list-demande-transfert.component';
import { AddDemandeTransfertComponent } from './bd/compenents/DemandeTransfert/add-demande-transfert/add-demande-transfert.component';
import {DemandeBudgetService} from './bd/services/demande-budget.service';
import {DemandeTransfertService} from './bd/services/demande-transfert.service';
import { DetailProjetComponent } from './bd/compenents/projet/detail-projet/detail-projet.component';
import {DetailProjetService} from './bd/services/detail-projet.service';
import { UpdateTypeComponent } from './bd/compenents/Type/update-type/update-type.component';
import { UpdateStatutProjetComponent } from './bd/compenents/statutProjet/update-statut-projet/update-statut-projet.component';
import { UpdateStatutDemandeComponent } from './bd/compenents/StatutDemande/update-statut-demande/update-statut-demande.component';
import { UpdateSponsorComponent } from './bd/compenents/Sponsor/update-sponsor/update-sponsor.component';
import { UpdateSourceBudgetComponent } from './bd/compenents/SourceBudget/update-source-budget/update-source-budget.component';
import { UpdateRecetteComponent } from './bd/compenents/Recette/update-recette/update-recette.component';
import { UpdateProjetComponent } from './bd/compenents/projet/update-projet/update-projet.component';
import { UpdateProgrammeComponent } from './bd/compenents/Programme/update-programme/update-programme.component';
import { UpdatePerimtreComponent } from './bd/compenents/Perimetre/update-perimtre/update-perimtre.component';
import { UpdatePartenaireComponent } from './bd/compenents/Partenaire/update-partenaire/update-partenaire.component';
import { UpdateOrientationComponent } from './bd/compenents/Orientation/update-orientation/update-orientation.component';
import { UpdateMarcheComponent } from './bd/compenents/marche/update-marche/update-marche.component';
import { UpdateMandatComponent } from './bd/compenents/Mandat/update-mandat/update-mandat.component';
import { UpdateIndicateurComponent } from './bd/compenents/Indicateur/update-indicateur/update-indicateur.component';
import { UpdateFonctionnaireComponent } from './bd/compenents/fonctionnaire/update-fonctionnaire/update-fonctionnaire.component';
import { UpdateDivisionComponent } from './bd/compenents/division/update-division/update-division.component';
import { UpdateDepenseComponent } from './bd/compenents/Depense/update-depense/update-depense.component';
import { UpdateDemandeTransfertComponent } from './bd/compenents/DemandeTransfert/update-demande-transfert/update-demande-transfert.component';
import { UpdateCompagneComponent } from './bd/compenents/Compagne/update-compagne/update-compagne.component';
import {UpdateDemandeBudgetComponent} from "./bd/compenents/DemandeBudget/update-demande-budget/update-demande-budget.component";
import { ChartsComponent } from './bd/compenents/projet/charts/charts.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderContentComponent,
    ContentComponent,
    TestComponent,
    LoginComponent,
    MasterComponent,
    GestionOrientationComponent,
    ListOrientationComponent,
    GestionProgrammeComponent,
    ListProgrammeComponent,
    AddProjetComponent,
    ListProjetComponent,
    ListMarcheComponent,
    AddMarcheComponent,
    AddSponsorComponent,
    ListSponsorComponent,
    ListPartenaireComponent,
    AddPartenaireComponent,
    AddIndicateurComponent,
    ListIndicateurComponent,
    ListSourcheBudgetComponent,
    AddSourcheBudgetComponent,
    AddStatutProjetComponent,
    ListStatutProjetComponent,
    ListPerimetreComponent,
    AddPerimetreComponent,
    AddDevisionComponent,
    ListDevisionComponent,
    ListFonctionnaireComponent,
    AddFonctionnaireComponent,
    AddTypeComponent,
    ListTypeComponent,
    AddRecetteComponent,
    ListRecetteComponent,
    AddMandatComponent,
    ListMandatComponent,
    AddStatutDemandeComponent,
    ListStatutDemandeComponent,
    AddCompagneComponent,
    ListCompagneComponent,
    AddDepenseComponent,
    ListDepenseComponent,
    AddDemandeBudgetComponent,
    ListDemandeBudgetComponent,
    ListDemandeTransfertComponent,
    AddDemandeTransfertComponent,
    DetailProjetComponent,
    UpdateTypeComponent,
    UpdateStatutProjetComponent,
    UpdateStatutDemandeComponent,
    UpdateSponsorComponent,
    UpdateSourceBudgetComponent,
    UpdateRecetteComponent,
    UpdateProjetComponent,
    UpdateProgrammeComponent,
    UpdatePerimtreComponent,
    UpdatePartenaireComponent,
    UpdateOrientationComponent,
    UpdateMarcheComponent,
    UpdateMandatComponent,
    UpdateIndicateurComponent,
    UpdateFonctionnaireComponent,
    UpdateDivisionComponent,
    UpdateDepenseComponent,
    UpdateDemandeTransfertComponent,
    UpdateDemandeBudgetComponent,
    UpdateCompagneComponent,
    ChartsComponent

  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ChartsModule
    ],
  providers: [
    OrientationService,
    DivisionService,
    ProgrammeService,
    FonctionnaireService,
    ProjetService,
    MarcheService,
    SponsorService,
    PartenaireService,
    SourceBudgetService,
    IndicateurService,
    PerimetreService,
    StatutProjetService,
    TypeService,
    RecetteService,
    MandatService,
    StatutDemandeService,
    CompagneService,
    DepenseService,
    DemandeTransfertService,
    DemandeBudgetService,
    DetailProjetService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

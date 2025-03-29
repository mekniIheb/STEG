import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuichetComponent } from './login-guichet/login-guichet.component';
import { MenusGuichetComponent } from './menus-guichet/menus-guichet.component';
import { VoirLesDemandeComponent } from './voir-les-demande/voir-les-demande.component';
import { VoirLesDemandesRefuseesComponent } from './voir-les-demandes-refusees/voir-les-demandes-refusees.component';
import { VoirLesDemandesAccepteesComponent } from './voir-les-demandes-acceptees/voir-les-demandes-acceptees.component';
import { VoirLesDemandesEnCoursComponent } from './voir-les-demandes-en-cours/voir-les-demandes-en-cours.component';
import { DetailleUserComponent } from './detaille-user/detaille-user.component';
import { DetailAcceptComponent } from './detail-accept/detail-accept.component';
import { DetailEnCoursComponent } from './detail-en-cours/detail-en-cours.component';
import { LoginIntComponent } from './login-int/login-int.component';
import { VoirDemandeUniteeComponent } from './voir-demande-unitee/voir-demande-unitee.component';
import { MenusUniteeComponent } from './menus-unitee/menus-unitee.component';
import { VerficationUniteeComponent } from './verfication-unitee/verfication-unitee.component';
import { AdminComponent } from './admin/admin.component';
import { DemandesArchiveesComponent } from './demandes-archivees-gu/demandes-archivees.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { DemandeComponent } from './demande/demande.component';
import { DetaileeComponent } from './detailee/detailee.component';
import { DocumentComponent } from './document/document.component';
import { GuideComponent } from './guide/guide.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { MenuComponent } from './menu/menu.component';
import { ResultComponent } from './result/result.component';
import { ResultatComponent } from './resultat/resultat.component';
import { ArchiveDDIComponent } from './archive-ddi/archive-ddi.component';
import { ArchiveDpteComponent } from './archive-dpte/archive-dpte.component';
import { ArchiveComponent } from './archive/archive.component';
import { MenuDDiComponent } from './menu-ddi/menu-ddi.component';
import { VoirDemandeDDIComponent } from './voir-demande-ddi/voir-demande-ddi.component';
import { DtAbonneComponent } from './dt-abonne/dt-abonne.component';
import {AuthGuard} from "./auth.guard";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {DemandeDetailPopupComponent} from "./demande-detail-popup/demande-detail-popup.component";
import {ProfilComponent} from "./profil/profil.component";
import {PdfViewerComponent} from "./pdf-viewer/pdf-viewer.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login-guichet', component: LoginGuichetComponent },
  { path: 'menus-guichet', component: MenusGuichetComponent },
  { path: 'voir-les-demande', component: VoirLesDemandeComponent },
  { path: 'voir-les-demandes-refusees', component: VoirLesDemandesRefuseesComponent },
  { path: 'voir-les-demandes-acceptees', component: VoirLesDemandesAccepteesComponent },
  { path: 'voir-les-demandes-en-cours', component: VoirLesDemandesEnCoursComponent },
  { path: 'detaille-user/:demandeId', component: DetailleUserComponent },
  { path: 'detail-accept', component: DetailAcceptComponent },
  { path: 'detail-en-cours', component: DetailEnCoursComponent },
  { path: 'login-int', component: LoginIntComponent },
  { path: 'voir-demande-unitee', component: VoirDemandeUniteeComponent },
  { path: 'menus-unitee', component: MenusUniteeComponent },
  { path: 'verfication-unitee', component: VerficationUniteeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'demandes-archivees', component: DemandesArchiveesComponent },
  { path: 'accueil', component: AccueilComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'demande', component: DemandeComponent },
  { path: 'DemandeDetailee', component: DetaileeComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'loginuser', component: LoginuserComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'result/:id', component: ResultComponent },
  { path: 'resultat', component: ResultatComponent },
  { path: 'archive-ddi', component: ArchiveDDIComponent },
  { path: 'archive-dpte', component: ArchiveDpteComponent },
  { path: 'login', component: LoginuserComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'voir-demande-ddi', component: VoirDemandeDDIComponent },
  { path: 'menu-ddi', component: MenuDDiComponent },
  { path: 'dt-abonne/:demandeId', component: DtAbonneComponent },
  { path: 'motDePasseOublie', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'demande-details/:id', component: DemandeDetailPopupComponent },
  { path: 'pdf-viewer/:id', component: PdfViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

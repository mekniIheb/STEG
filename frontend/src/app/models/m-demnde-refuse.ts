export enum Status {
    EN_COURS_GU,
    EN_COURS_DDI,
    EN_COURS_DPTE,
    REFUSEE,
    ACCEPTEE,
  }
export class MDemndeRefuse {

     
        id: string = '';
        nomdeentreprise:string='';
        matriculfiscal: string = '';
        nomdugérant :String ="";
        nom: string = '';
        cin: string = '';
        email: string = '';
        adresseProjet: string = '';
        onFileSelected1!: File; // Initialisez à null jusqu'à ce qu'un fichier soit sélectionné
        onFileSelected2!: File;
        onFileSelected3!: File;
        onFileSelected4!: File;
        status: Status = Status.REFUSEE;
         rapport:String='';
        constructor() {}
        
      }
        
      



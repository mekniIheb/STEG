
export  interface Agent { 
     id:String,
     matriculefiscal:String,
     firstName:String,
     email:String,
     phoneNumber:String,
     password:String,
     role: String,
     address: string,
     telephone: string,
     matricule: string,
     editMode?: boolean,   
}
export enum Role {
     GUICHET = 'GUICHET',
     DDI = 'DDI',
     DPTE = 'DPTE',
     CLIENT = 'CLIENT'
   }

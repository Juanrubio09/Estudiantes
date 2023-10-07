import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  selectedCategory: string = '';

  clasesAgendadas: any[] = [];

  clases: any[] = [
    { nombre: 'DERECHOS HUMANOS A001', teoria: 'TEORIA 1 Y 2', agendada: false, tipo: 'Teoría' },
    { nombre: 'ADAPTACION AL MEDIO A002', teoria: 'TEORIA 3 Y 4', agendada: false, tipo: 'Teoría' },
    { nombre: 'ESTADISTICA ACCIDENTALIDAD CIFRAS Y CAUSAS A003', teoria: 'TEORIA 5 Y 6', agendada: false, tipo: 'Teoría' },
    { nombre: 'INSPECCION PREOPERACIONAL A004', teoria: 'TEORIA 7 Y 8', agendada: false, tipo: 'Teoría' },
    { nombre: 'DOCUMENTOS OBLIGATORIOS A005', teoria: 'TEORIA 9 Y 10', agendada: false, tipo: 'Teoría' },
    { nombre: 'MARCO LEGAL 1 A006', teoria: 'TEORIA 11 Y 12 ', agendada: false, tipo: 'Teoría' },
    { nombre: 'MARCO LEGAL 2 A007', teoria: 'TEORIA 13 Y 14', agendada: false, tipo: 'Teoría' },
    { nombre: 'PRIMEROS AUXILIOS 1 A008', teoria: 'TEORIA 15 Y 16', agendada: false, tipo: 'Teoría' },
    { nombre: 'MANEJO DEFENSIVO 1 A009', teoria: 'TEORIA 17 Y 18', agendada: false, tipo: 'Teoría' },
    { nombre: 'PRIMEROS AUXILIOS 2 A010', teoria: 'TEORIA 19 Y 20', agendada: false, tipo: 'Teoría' },
    { nombre: 'MANEJO DEFENSIVO 2 A011', teoria: 'TEORIA 21 Y 22', agendada: false, tipo: 'Teoría' },
    { nombre: 'SEÑALES DE TRANSITO 1 A012', teoria: 'TEORIA 23 Y 24', agendada: false, tipo: 'Teoría' },
    { nombre: 'SEÑALES DE TRANSITO 2 A013', teoria: 'TEORIA 25 Y 26', agendada: false, tipo: 'Teoría' },
    { nombre: 'TECNICAS DE MANEJO 1 A014', teoria: 'TEORIA 27 Y 28', agendada: false, tipo: 'Teoría' },
    { nombre: 'TECNICAS DE MANEJO 2 A015', teoria: 'TEORIA 29 Y 30', agendada: false, tipo: 'Teoría' },
    
    // Agrega el resto de las clases aquí
  ];

  

  

  constructor(
    private navCtrl: NavController, 
    private router: Router,
    private alertController: AlertController,
    private storage: Storage
    ) 
    {}

    async agendarClase(clase: any) {
      const alert = await this.alertController.create({
        header: '¿Quieres agendar esta clase?',
        message: `Clase: ${clase.nombre}`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Aceptar',
            handler: () => {
              clase.agendada = true;
              this.clasesAgendadas.push(clase);

              this.storage.set('clasesAgendadas', this.clasesAgendadas);

              this.router.navigate(['/tabs/tab5']);
            }
          }
        ]
      });
  
      await alert.present();
    }

    async ionViewWillEnter() {
      await this.storage.create();

      // Carga las clases agendadas desde el almacenamiento
    this.clasesAgendadas = await this.storage.get('clasesAgendadas') || [];
      // Realiza operaciones con la base de datos aquí
    }

    

  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)
    
    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
  goToTab1() {
    // Redirige al Tab1
    this.router.navigate(['/tabs/tab1']);
  }

}

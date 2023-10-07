import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  clasesAgendadas: any[] = []; // Clases de taller

  clases: any[] = [
    { nombre: 'MOTORES DE COMBUSTION INTERNA A031', taller: 'TALLER 1', agendada: false , tipo: 'Taller' },
    { nombre: 'CAJAS Y TRASNMICIONES A032', taller: 'TALLER 2', agendada: false, tipo: 'Taller' },
    { nombre: 'FLUIDOS SISTEMA ELECTRICO Y SUSPENCION A033', taller: 'TALLER 3', agendada: false, tipo: 'Taller' },
    { nombre: 'FRENOS Y DISPOSITIVOS DE SEGURIDAD A034', taller: 'TALLER 4', agendada: false, tipo: 'Taller' },
    { nombre: 'RODAMIENTO Y DESPINCHADA A035', taller: 'TALLER 5', agendada: false, tipo: 'Taller' },
    
    // Agrega el resto de las clases aquí
  ];


  constructor(
    private navCtrl: NavController, 
    private router: Router,
    private alertController: AlertController,
    private storage: Storage
  ) { }


  async agendarClase(clase: any) {
    const alert = await this.alertController.create({
      header: '¿Quieres agendar esta clase de taller?',
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

            this.storage.set('clasesAgendadasTaller', this.clasesAgendadas); // Usar un nombre diferente en el almacenamiento

            this.router.navigate(['/tabs/tab5']); // Asegúrate de que la navegación sea correcta
          }
        }
      ]
    });

    await alert.present();
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.clasesAgendadas = await this.storage.get('clasesAgendadasTaller') || [];
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

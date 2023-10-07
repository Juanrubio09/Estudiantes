import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

   // Variables para el progreso del usuario
   completedTeoriaCount: number = 0;
   completedTallerCount: number = 0;
   hasPassedTheoreticalExam: boolean = false;
 
   // Otras variables
   showExamCard: boolean = false;
   showPracticeCard: boolean = false;

   constructor(
    private navCtrl: NavController,
    private router: Router,
    private storage: Storage,
    private alertController: AlertController
  ) { }

  async ionViewWillEnter() {
    // Obtén la categoría del usuario desde el almacenamiento local
    const userCategory = await this.storage.get('userCategory');
    
    if (userCategory) {
      // Realiza la lógica de comprobación de acuerdo con la categoría
      if (userCategory === 'a2') {
        if (this.completedTeoriaCount >= 13 && this.completedTallerCount >= 2) {
          this.showExamCard = true;
        }
      } else if (userCategory === 'b1') {
        if (this.completedTeoriaCount >= 13 && this.completedTallerCount >= 3) {
          this.showExamCard = true;
        }
      } else if (userCategory === 'c1') {
        if (this.completedTeoriaCount >= 15 && this.completedTallerCount >= 3) {
          this.showExamCard = true;
        }
      } else if (userCategory === 'c2') {
        if (this.completedTeoriaCount >= 10 && this.completedTallerCount >= 5) {
          this.showExamCard = true;
        }
      }
    }

    // Verifica si el usuario ha aprobado el examen teórico (puedes implementar tu lógica aquí)
    // Si el usuario ha aprobado, establece la bandera hasPassedTheoreticalExam en true
    // this.hasPassedTheoreticalExam = true; // Asegúrate de implementar la lógica para esto
  }

  async seleccionarCategoria() {
    const alert = await this.alertController.create({
      header: 'Selecciona tu categoría',
      inputs: [
        {
          name: 'a2',
          type: 'radio',
          label: 'A2',
          value: 'a2',
        },
        {
          name: 'b1',
          type: 'radio',
          label: 'B1',
          value: 'b1',
        },
        {
          name: 'c1',
          type: 'radio',
          label: 'C1',
          value: 'c1',
        },
        {
          name: 'c2',
          type: 'radio',
          label: 'C2',
          value: 'c2',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Cerrar el cuadro de diálogo sin hacer nada
          },
        },
        {
          text: 'Aceptar',
          handler: async (selectedCategory) => {
            // Guardar la categoría seleccionada en el almacenamiento local
            await this.storage.set('userCategory', selectedCategory);
            
            // Actualizar la lógica de acuerdo con la categoría seleccionada
            this.ionViewWillEnter();
          },
        },
      ],
    });

    await alert.present();
  }




  
  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)
    
    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  navegarATab(tab: string) {
    this.router.navigate(['/tabs/' + tab]);
  }

}
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page  {

  clasesAgendadas: any[] = [];
  clasesAgendadasTaller: any[] = []; 


  constructor(
    private navCtrl: NavController, 
    private router: Router,
    private storage: Storage) {}

    async ionViewWillEnter() {
      // Asegúrate de llamar al método 'create' antes de acceder a la base de datos
      await this.storage.create();
      this.clasesAgendadas = await this.storage.get('clasesAgendadas') || [];
      this.clasesAgendadasTaller = await this.storage.get('clasesAgendadasTaller') || [];
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

  filterByType(type: string): any[] {
    return this.clasesAgendadas.concat(this.clasesAgendadasTaller).filter(clase => clase.tipo === type);
  }
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page  {

  horasDisponiblesTeorico: string[] = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'
    // Agrega más horas disponibles según tu necesidad
  ];

  constructor(
    private navCtrl: NavController, 
    private router: Router) {}

    agendarExamenTeorico(hora: string) {
      // Agrega aquí la lógica para agendar el examen teórico
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
  
    ngOnInit() {
    }
  

}

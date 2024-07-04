import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    username: string | null = null;

    constructor(private router: Router) { }

    navigate(event: Event): void {
        const target = event.target as HTMLSelectElement;
        const value = target.value;
        if (value) {
            console.log(value);
            this.router.navigate([value]);
        }
    }
}

import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { UserService } from "../../services/user.service";
import { User } from "../../interfaces/user.interface";

@Component({
  selector: "app-users",
  imports: [AsyncPipe, MatTableModule],
  standalone: true,
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent {
  dataSource = this.userService.getUsers();
  columns: string[] = ['id', 'name', 'email', 'phone', 'city'];

  constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe({
  //     next: (users) => this.dataSource = users,
  //     error: (err) => console.error('Error al obtener usuarios', err)
  //   });
  // }
}

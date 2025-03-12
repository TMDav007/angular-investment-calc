import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [UserComponent],
    imports: [FormsModule],
    exports: [UserComponent ]
})
export class UserModule {}
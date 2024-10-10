import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        FormsModule,
        RatingModule,
        ButtonModule,
        ConfirmPopupModule,
        ToastModule,
    ],
    providers: [ConfirmationService],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
})
export class ProductComponent {
    constructor(private confirmationService: ConfirmationService) {}

    @ViewChild('deleteButton') deleteButton: any;

    @Input() product!: Product;
    @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

    editProduct(): void {
        this.edit.emit(this.product);
    }

    deleteProduct(): void {
        this.delete.emit(this.product);
    }

    confirmDelete() {
        this.confirmationService.confirm({
            target: this.deleteButton.nativeElement,
            message: 'Are you sure that you want to delete this Product?',
            accept: () => {
                this.deleteProduct();
            },
        });
    }

    ngOnInit() {}
}

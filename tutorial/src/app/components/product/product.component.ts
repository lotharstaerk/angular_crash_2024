import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [FormsModule, RatingModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
})
export class ProductComponent {
    @Input() product!: Product;
    @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

    editProduct(): void {
        this.edit.emit(this.product);
    }

    deleteProduct(): void {
        this.delete.emit(this.product);
    }

    ngOnInit() {}
}

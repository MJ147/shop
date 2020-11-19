import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Product, ProductService } from '../../services';

@Component({
	selector: 'app-categories',
	styleUrls: ['./categories.component.scss'],
	templateUrl: './categories.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
	readonly categoriesNames$: Observable<string[]>;
	readonly products$: Observable<Product[]>;

	constructor(private productService: ProductService, private route: ActivatedRoute) {
		this.categoriesNames$ = this.productService
			.getDistinctCategories()
			.pipe(map((categories) => ['wszystkie produkty', ...categories]));

		this.products$ = this.route.params.pipe(switchMap(({ category }) => this.getCategory(category)));
	}

	private getCategory(category: string): Observable<Product[]> {
		return category.toLowerCase() === 'wszystkie produkty'
			? this.productService.getAll()
			: this.productService.getByCategory(category.toLowerCase());
	}
}
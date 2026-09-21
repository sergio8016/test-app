import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { MOCK_PRODUCTS } from './mock-products';
import { ProductResult, ProviderId } from './product-search.models';

@Injectable({ providedIn: 'root' })
export class ProductSearchService {
  search(query: string, providers: ProviderId[] = []): Observable<ProductResult[]> {
    const normalizedQuery = query.trim().toLowerCase();
    return of(MOCK_PRODUCTS).pipe(
      map((products) => products.filter((product) => {
        const searchableText = `${product.title} ${product.description} ${product.category} ${product.providerLabel}`.toLowerCase();
        const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
        const matchesProvider = providers.length === 0 || providers.includes(product.provider);
        return matchesQuery && matchesProvider;
      }).sort((firstProduct, secondProduct) => firstProduct.price - secondProduct.price)),
      delay(350),
    );
  }
}

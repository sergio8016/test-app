import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, Subject, switchMap, tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { ProductSearchService } from './product-search.service';
import { ProductResult, ProviderId } from './product-search.models';

@Component({
  selector: 'app-buy-items',
  imports: [CommonModule, FormsModule, ButtonModule, CardModule, ProgressSpinnerModule, TagModule],
  templateUrl: './buy-items.component.html',
  styleUrl: './buy-items.component.css',
})
export class BuyItemsComponent {
  protected readonly providers: { id: ProviderId; label: string; icon: string }[] = [
    { id: 'amazon', label: 'Amazon', icon: 'pi pi-box' },
    { id: 'ebay', label: 'eBay', icon: 'pi pi-tag' },
    { id: 'buildhub', label: 'BuildHub Supply', icon: 'pi pi-wrench' },
  ];
  protected products: ProductResult[] = [];
  protected query = '';
  protected selectedProviders: ProviderId[] = [];
  protected isLoading = false;
  protected addedItem = '';
  protected lowestPrice: number | null = null;

  private readonly searchInput$ = new Subject<string>();
  private readonly destroyRef = inject(DestroyRef);
  private readonly productSearch = inject(ProductSearchService);

  constructor() {
    this.searchInput$.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap((query) => this.productSearch.search(query, this.selectedProviders)),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((products) => {
      this.products = products;
      this.lowestPrice = products.length ? Math.min(...products.map((product) => product.price)) : null;
      this.isLoading = false;
    });

    this.searchInput$.next('');
  }

  protected search(): void {
    this.searchInput$.next(this.query);
  }

  protected toggleProvider(provider: ProviderId): void {
    this.selectedProviders = this.selectedProviders.includes(provider)
      ? this.selectedProviders.filter((selected) => selected !== provider)
      : [...this.selectedProviders, provider];
    this.search();
  }

  protected addItem(product: ProductResult): void {
    this.addedItem = product.title;
  }

  protected isLowestPrice(product: ProductResult): boolean {
    return product.price === this.lowestPrice;
  }
}

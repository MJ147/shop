import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ProductService } from './services';
import { SearchFormModule } from './search-form';
import { AppComponent } from './app.component';
import { routes } from './app.routing';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FlexLayoutModule,
		RouterModule.forRoot(routes),

		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule,

		SearchFormModule,
	],
	providers: [ProductService],
	bootstrap: [AppComponent],
})
export class AppModule {}

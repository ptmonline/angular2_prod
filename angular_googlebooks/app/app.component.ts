import { Component } from '@angular/core';
import {BookService} from './book.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [BookService]
})
export class AppComponent {
  books: string[] = [];
  constructor(private bookService: BookService){}

  search(title: string){
    this.books = [];
    this.bookService.getBooks(title).subscribe(
      books => this.books = books,
      error => console.error(error)
    )
    
  }
 }
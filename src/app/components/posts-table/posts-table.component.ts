import {  Component, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styles: [],
})
export class PostsTableComponent implements OnInit {
  posts: Post[] = [];

  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<Post>(this.posts);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.dataSource = new MatTableDataSource<Post>(this.posts);
      this.dataSource.paginator = this.paginator;
    });
  }
}

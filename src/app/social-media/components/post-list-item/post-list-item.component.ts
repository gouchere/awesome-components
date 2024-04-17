import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Post } from '../../models/post.model'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.scss',
})
export class PostListItemComponent implements OnInit {
  @Input() postItem!: Post
  @Output() postCommented = new EventEmitter<{
    comment: string
    postId: number
  }>()

  constructor() {}

  ngOnInit(): void {}

  onNewComment(value: string) {
    this.postCommented.emit({ comment: value, postId: this.postItem.id })
  }
}

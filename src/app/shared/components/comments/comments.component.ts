import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Comment } from '../../../core/models/comment.model'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { exampleAnimation } from '../../../core/utils/utils.animation'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
  animations: exampleAnimation,
})
export class CommentsComponent implements OnInit {
  @Input() comments!: Comment[]
  @Output() newComment = new EventEmitter<string>()

  commentCtrl!: FormControl
  animationState: { [key: number]: 'default' | 'active' } = {}

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.commentCtrl = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(10),
    ])
    this.comments.forEach(
      (_, index) => (this.animationState[index] = 'default')
    )
  }

  onLeaveComment() {
    if (this.commentCtrl.invalid) {
      return
    }
    const maxId = Math.max(...this.comments.map((comment) => comment.id))
    this.comments.unshift({
      id: maxId + 1,
      comment: this.commentCtrl.value,
      createdDate: new Date().toISOString(),
      userId: 1,
    })
    this.newComment.emit(this.commentCtrl.value)
    this.commentCtrl.reset()
  }

  onListItemMouseEnter(index: number) {
    this.animationState[index] = 'active'
  }
  onListItemMouseLeave(index: number) {
    this.animationState[index] = 'default'
  }
}

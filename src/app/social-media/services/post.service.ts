import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Post } from '../models/post.model'
import { environnement } from '../../../enviornnements/environnement'

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environnement.apiUrl}/posts`)
  }

  addNewComment(postCommented: { comment: string; postId: number }) {
    console.log(postCommented)
  }
}

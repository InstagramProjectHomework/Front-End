import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchModalService {

  constructor() { }

  $modal = new EventEmitter<any>();
  $modalMessages = new EventEmitter<any>();
  $postModal = new EventEmitter<any>();

}

import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  
  user;
  event = {
    _host:"",
    _join_user:""
  };

  comments = {
    content:"",
    message_poster:""
  }


  constructor(private _service: MainService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this._service.user;
    console.log(this.user);
    this._route.paramMap.subscribe(params => {
      this._service.getOneEvent(params.get("id"), (res)=> {
        console.log("get one event detail ts", res);
        this.event = res;
      })
    })
  }

  createComment() {
    this._service.createComment(this.comments, (res) => {
    })
    this.comments = {
      content: "",
      message_poster: ""
    }
  }

  logout() {
    this._service.logout();
    this._router.navigate(['']);
  }

}

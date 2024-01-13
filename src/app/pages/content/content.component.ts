import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://imgs.search.brave.com/_NfprG-2Zo7SCsLoPBGRjFXcAzusbBFdZFgjd2VdxYI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/b2xoYXJkaWdpdGFs/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMy9D/aHJpcy1FdmFucy1j/b21vLUNhcGl0YW8t/QW1lcmljYS1lbS1V/bHRpbWF0by5qcGc";
  contentTitle:string= "CAPITAO AMERICA BRABO";
  contentBody:string= "CAPITAO AMERICA LOREM PISUM NAO SEI OQ TONY STARK";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

}

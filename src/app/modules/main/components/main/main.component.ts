import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{


  @ViewChild('header') animatedHeader!: ElementRef;

  constructor(private router : Router) { }
  ngOnInit(): void {
    this.layerAnimation();
  }

  OnClick() : void {
    this.router.navigate([`/main/detail`]);
  }

  layerAnimation(){
    let anime: TimelineMax = new TimelineMax();
    
    anime.from(this.animatedHeader.nativeElement, 1, {x: -200, opacity: 0});
    
    return anime;
}
}

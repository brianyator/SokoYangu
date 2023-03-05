import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nyumbani',
  templateUrl: './nyumbani.component.html',
  styleUrls: ['./nyumbani.component.css']
  
})
export class NyumbaniComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards:{cols:string, rows:string,imageName:string, title:string}[]=[];
  cardsForHandset =[];
  cardsForWeb =[];
  
  
  isHandset:boolean = false;
  isHandsetObserver: Observable<boolean>= this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }

      return false;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    public appService:AppService) {}


  ngOnInit(){
    this.isHandsetObserver.subscribe(currentObserverValue => {
      this.isHandset = currentObserverValue;
      this.loadCards();
    });

    this.appService.getDeals().subscribe(
      response=>{
        this.cardsForHandset = response.handsetCards;
        this.cardsForWeb = response.deskCards;
        this.loadCards();
      },
      error=>{
        alert('There was an error in receiving data from the server. Please try again later.');
      }
    );
  }


  loadCards(){
    this.cards = this.isHandset? this.cardsForHandset:this.cardsForWeb;
  }


  getImage(imageName: string): string {
    return 'url(' + 'http://localhost:3000/images/' + imageName + '.jpg' + ')';
  }

}

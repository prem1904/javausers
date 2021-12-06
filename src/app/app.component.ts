import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data/data.service';
import { UserModule } from './user/user/user.module';
import {} from 'googlemaps';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  user:UserModule=<UserModule>{};
  map: google.maps.Map=<google.maps.Map>{};
  location:string="Chennai, Tamil Nadu, India";
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;


  constructor(private dataservice: DataService,private tokenStorageService: TokenStorageService){}
  function(event: any){
    console.log(event.target.value);
  }
   logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

 
    const loader = new Loader({
      apiKey: environment.apikey,
      libraries:["places"],
    });
    
    loader.load().then(() => {
      this.map= new google.maps.Map(document.createElement('div') as HTMLElement);
      const input = document.getElementById("pac-input") as HTMLInputElement;
      const searchBox = new google.maps.places.SearchBox(input);

      // Bias the SearchBox results towards current map's viewport.
      this.map.addListener("bounds_changed", () => {
        searchBox.setBounds(this.map.getBounds() as google.maps.LatLngBounds);
      });
    
      let markers: google.maps.Marker[] = [];

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
    
        if (places.length == 0) {
          return;
        }
    
        // Clear out the old markers.
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];
    
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
    
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }
    
          const icon = {
            url: place.icon as string,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25),
          };
    
          // Create a marker for each place.
    
          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        this.map.fitBounds(bounds);
      });


    });
    
  }
  title = 'review-dashboard';

  
}

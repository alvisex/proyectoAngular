import {Component, OnInit} from '@angular/core';

//import * as $ from '../../node_modules/jquery/dist';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'app';

  ngOnInit() {
    /*
    (function($){
      $(function(){

        $('.sidenav').sidenav();
        $('.parallax').parallax();

      }); // end of document ready
    })(jQuery); // end of jQuery name space
*/
      //$('.sidenav').sidenav();
      $('.parallax').parallax();
    // var elems = document.querySelectorAll('.parallax');
    // var instances = M.Parallax.init(elems, options);
  }

}

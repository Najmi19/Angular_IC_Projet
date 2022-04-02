import { Injectable,EventEmitter,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  @Output() event = new EventEmitter();

  getProducts() {
    return [
      {
        product_id : "1",
        product_img : "https://i.ibb.co/wCPJRLD/car-gc07e62adb-1920.jpg",
        product_name : " Bugatti - veyron",
        product_price : 3500000
,
        product_details : "The Veyron Grand Sport Vitesse was the fastest roadster in the world, reaching an averaged top speed of 408.84 km/h (254.04 mph) in a test on 6 April 2013.",
        product_quanity : 1
      },
      {
        product_id : "2",
        product_img : "https://i.ibb.co/XLNMV3S/auto-g51878f578-1920.jpg",
        product_name : " Mercedes - AMG",
        product_price : 3500,
        product_details : "The Mercedes-AMG GT combines the fascination of an authentic sports car with segment-specific technology leadership and superb everyday practicality. With a top speed of 312 km/h and an acceleration from 0 to 100 km/h in  3.8 seconds, the Mercedes-AMG GT is the ideal fit for a sporty lifestyle. The Mercedes-AMG GT expresses the essence of the performance brand AMG.",
        product_quanity : 1
      },
      {
        product_id : "3",
        product_img : "https://i.ibb.co/FqDSbjN/car-gf35abb144-1920.jpg",
        product_name : " Audi - A5",
        product_price : 2500,
        product_details : "The Audi A5 is a series of compact executive coupe cars produced by the German automobile manufacturer Audi since June 2007. The A5 range additionally comprises the coupe, cabriolet, and Sportback (a five-door liftback with a fastback roofline) version of the Audi A4 saloon and estate models.",
        product_quanity : 1
      },
      {
        product_id : "4",
        product_img : "https://i.ibb.co/K6bxWWh/motorbike-g11a0ab14e-1920.jpg",
        product_name : " Harlay-Davidson - SOFTAIL FXDR 114",
        product_price : 19399,
        product_details : "The FXDR 114 can achieve a top speed of around 160 mph. This feat makes it the fastest Harley-Davidson production motorcycle currently being sold new, although it's not the fastest motorcycle in the company's entire history.",
        product_quanity : 1
      },
      {
        product_id : "5",
        product_img : "https://i.ibb.co/sbKGmQ2/bmw-gcf45aa3e3-1920.jpg",
        product_name : " BMW - R nine T Scrambler 1200",
        product_price : 18240,
        product_details : "BMW R Nine T Scrambler is a Scrambler bike that weighs 223 kg, has a 1170 cc BS-VI engine and a fuel capacity of 17 litres.",
        product_quanity : 1
      },
      {
        product_id : "6",
        product_img : "https://i.ibb.co/yywtk0q/motorcycle-ga40c1e33b-1920.png",
        product_name : " AGUSTA - RR 800",
        product_price : 19998,
        product_details : "With the looks of a street fighter, reflecting the powerful three-piston heart, the Dragster RR is a raw blend of technology, design and emotions. No other motorcycle better embodies this concept and the vision inspiring it.",
        product_quanity : 1
      }
    ];
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {
data: any;

  constructor(public http: Http) {
    // console.log('Hello DataProvider Provider');

    this.data = [
      {
        code        : 1,
        title       : 'Fish Amok',
        price       : 5,
        picture     : 'assets/foods/cambodia-Fish-Amok.jpg',
        description : 'Probably the most popular Cambodian dish. This dish is composed of a rich and creamy curry like sauce that is the perfect balance of ginger, lemongrass, turmeric and coconut milk. When cooked correctly, the fish is silky smooth, almost melting in your mouth with each bite. This is usually served wrapped in a banana leaf and isn’t too spicy.'
      },
      {
        code          : 2,
        title       : 'Samlor Kako',
        price       : 6,
        picture     : 'assets/foods/Samlo-Kakor.jpg',
        description : 'Samlor Kako: is one of Cambodian national dishes. It uses an incredible range of ingredients to achieve its complex range of flavors, including the famous prahok or fermented fish cheese, which is unique to Khmer cuisine.'
      },
      {
        code          : 3,
        title       : 'Khmer Sour Soup',
        price       : 8,
        picture     : 'assets/foods/khmer_soup.jpg',
        description : 'A bowl of fresh Khmer sour soup helps the body feel refreshed and clean, leaving just enough room for dessert. Sour soup is among the most popular Khmer foods. For years, this vegetable stew has fed hardworking Cambodians, particularly in the countryside where ingredients are easily found in neighboring pastures and ponds. Today, city dwellers enjoy this dish as a healthy alternative to fried bananas and fish. Expatriates living in Cambodia also are realizing the healthy benefits of eating a diet of fresh fish and water green, the base of Khmer sour soup.'
      },
      {
        code          : 4,
        title       : 'Lap Khmer (Lime-marinated Khmer beef salad)',
        price       : 5, 
        picture     : 'assets/foods/cambodia-Lap-Khmer.jpg',
        description : 'This dish is a take on ceviche as they take thin slices of beef which is marinated in lime juice with lots of shallots, garlic, fish sauce, basil, mint, and bell peppers. The whole thing is then topped with lots of chilies. To those that aren’t too big on spice, be warned, this dish almost always comes with a kick!'
      },
      {
        code        : 5,
        title       : 'Khmer Red Curry',
        picture     : 'assets/foods/cambodia-Khmer-red-curry.jpg',
        price       : 3,
        description : 'Unlike its Thai counterpart, Khmer curry doesn’t have the tendency to blow a hole through your mouth. Often made with either chicken, beef or fish, this dish is made with potatoes, coconut milk, lemon grass, and a special Cambodian ingredient, kroeung.'
      },
      {
        code        : 6,
        title       : 'Bai Sach Chrouk (Grilled pork and broken rice)',
        picture     : 'assets/foods/cambodia-Bai-Sach-Chrouk.jpg',
        price       : 4,
        description : 'If you’re looking for something easy to eat as you ease into Cambodian food, try some bai sach chrouk. This is grilled pork that is marinated in coconut milk and garlic. This dish can be found everywhere on the streets and is served with broken rice along with fresh vegetables. The beef is really flavourful and tender due to the coconut milk. The fresh veggies are also a nice addition to every bite! '
      },
      {
        code        : 7,
        title       : 'Lok lak (Stir-fried beef in brown sauce)',
        price       : 5,
        picture     : 'assets/foods/cambodia-Lok_lak-960x640.jpg',
        description : 'A typical stir fry, lok lak is a traditional Khmer dish made using thin slices of beef or pork in a brown sauce. This dish is typically served with rice and some green salad. They normally serve this with a dipping sauce consisting of lime, salt, and pepper.'
      }
    ];
  }
  loadAll(){
    return Promise.resolve(this.data);
  };
   getByID(id){
    for(var i=0; i< (this.data).length; i++)
    {
      if(this.data[i].code == id)
      {
        return Promise.resolve(this.data[i]);
      }
    }
  };
}

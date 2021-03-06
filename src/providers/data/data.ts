import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
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
        // {"gender":"female","name":{"title":"miss","first":"denise","last":"welch"},"location":{"street":"3268 daisy dr","city":"davenport","state":"new hampshire","postcode":18906},"email":"denise.welch@example.com","login":{"username":"bluesnake439","password":"citroen","salt":"nQmYFst3","md5":"2a0344e389d76acc89b34fa1898c551e","sha1":"473c73338a8c82b7ddf15067987310af51683e15","sha256":"dac44888b658ed8c243c2409589bfdd6c6a6ddc7167a00b50906ab817c7793b4"},"dob":"1960-03-04 17:45:00","registered":"2004-08-14 08:21:33","phone":"(602)-353-9356","cell":"(408)-391-3849","id":{"name":"SSN","value":"628-30-5345"},"picture":{"large":"https://randomuser.me/api/portraits/women/39.jpg","medium":"https://randomuser.me/api/portraits/med/women/39.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/39.jpg"},"nat":"US"},{"gender":"male","name":{"title":"mr","first":"alex","last":"mckinney"},"location":{"street":"5747 timber wolf trail","city":"green bay","state":"oklahoma","postcode":10780},"email":"alex.mckinney@example.com","login":{"username":"bigfish119","password":"winnie","salt":"3KIIHrXi","md5":"e41a632270609bd9ff4d7e2f99b88155","sha1":"25d7e75a35d46f3caf0feeb27570089a02b25b0b","sha256":"8660f16c351426afe73f4eaf08833d591e69759ee290335d808426110c789bc0"},"dob":"1964-10-24 00:38:02","registered":"2009-02-03 10:39:05","phone":"(695)-405-1378","cell":"(507)-591-3297","id":{"name":"SSN","value":"163-60-2786"},"picture":{"large":"https://randomuser.me/api/portraits/men/42.jpg","medium":"https://randomuser.me/api/portraits/med/men/42.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/42.jpg"},"nat":"US"},{"gender":"male","name":{"title":"mr","first":"pat","last":"jenkins"},"location":{"street":"4603 elgin st","city":"boston","state":"alaska","postcode":23739},"email":"pat.jenkins@example.com","login":{"username":"heavyelephant274","password":"christ","salt":"miSeeGgi","md5":"5d0ba2d9c4c26158e72c14c48dbda0b2","sha1":"4f81e0884159dcfa7b1b073e84966f3dcbed0e10","sha256":"734508516f9fc3f6a8b112a14b058bb44cd4b0529f422de8828e067955d08f94"},"dob":"1981-12-23 01:35:28","registered":"2008-07-03 10:57:16","phone":"(843)-624-1719","cell":"(335)-647-3559","id":{"name":"SSN","value":"275-81-8574"},"picture":{"large":"https://randomuser.me/api/portraits/men/29.jpg","medium":"https://randomuser.me/api/portraits/med/men/29.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/29.jpg"},"nat":"US"},{"gender":"female","name":{"title":"ms","first":"linda","last":"obrien"},"location":{"street":"2874 northaven rd","city":"bozeman","state":"massachusetts","postcode":40141},"email":"linda.obrien@example.com","login":{"username":"orangeswan794","password":"chloe1","salt":"B6PEvjyq","md5":"87517874a683d244e6e2dcb3a8ab9b4f","sha1":"4644e63729634068387da76e853f2cc1fef36180","sha256":"d2004c35d961071e79621e1e4a18160a64cb50697eae26d4240e039f57f625fc"},"dob":"1949-09-22 07:44:05","registered":"2003-12-26 14:10:44","phone":"(887)-751-3756","cell":"(529)-184-2517","id":{"name":"SSN","value":"364-97-6649"},"picture":{"large":"https://randomuser.me/api/portraits/women/5.jpg","medium":"https://randomuser.me/api/portraits/med/women/5.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/5.jpg"},"nat":"US"},{"gender":"female","name":{"title":"miss","first":"alice","last":"woods"},"location":{"street":"8374 harrison ct","city":"anaheim","state":"massachusetts","postcode":77064},"email":"alice.woods@example.com","login":{"username":"purplebird931","password":"back","salt":"VAu7Xv70","md5":"ac71961937d27e844bee9b9f8323c4df","sha1":"d72c77dbe14c1aff7bb2e32ae31560eafead577e","sha256":"52802745dcd8ad196118033dcaa30eaafbe2a03fc318895de514b9b2327aa657"},"dob":"1968-12-17 11:21:22","registered":"2009-09-17 13:05:01","phone":"(221)-574-2621","cell":"(182)-925-8560","id":{"name":"SSN","value":"428-08-2632"},"picture":{"large":"https://randomuser.me/api/portraits/women/5.jpg","medium":"https://randomuser.me/api/portraits/med/women/5.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/5.jpg"},"nat":"US"},{"gender":"female","name":{"title":"miss","first":"catherine","last":"reynolds"},"location":{"street":"3987 w gray st","city":"stockton","state":"idaho","postcode":96842},"email":"catherine.reynolds@example.com","login":{"username":"smallkoala879","password":"amanda","salt":"hQkwQyav","md5":"906bb76adb65784ce6577042a581c43d","sha1":"7fc0e59bb3ec79443be3e28dd091d7e1e82d19f5","sha256":"63b0728fcc7dec42274a63e0bb61147fde13858e586723626b4116bb149b99d0"},"dob":"1992-09-24 09:19:52","registered":"2007-01-31 22:52:07","phone":"(588)-868-7839","cell":"(245)-201-2825","id":{"name":"SSN","value":"739-82-7340"},"picture":{"large":"https://randomuser.me/api/portraits/women/42.jpg","medium":"https://randomuser.me/api/portraits/med/women/42.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/42.jpg"},"nat":"US"},{"gender":"female","name":{"title":"miss","first":"lois","last":"carpenter"},"location":{"street":"4746 bollinger rd","city":"burbank","state":"connecticut","postcode":21085},"email":"lois.carpenter@example.com","login":{"username":"bluecat922","password":"contortionist","salt":"JxuL04lV","md5":"cfa0309e7b9ee546bf6e6d2f317a61fd","sha1":"6af5ccafe92d854d73f91d8fe9cf3c47a5276036","sha256":"28aeb1c193152279da96c0d03cc9308b975583af096605da8a9a5dd1997346f2"},"dob":"1985-06-02 18:13:28","registered":"2004-02-25 03:32:04","phone":"(384)-643-8033","cell":"(577)-198-4765","id":{"name":"SSN","value":"937-34-9925"},"picture":{"large":"https://randomuser.me/api/portraits/women/80.jpg","medium":"https://randomuser.me/api/portraits/med/women/80.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/80.jpg"},"nat":"US"},{"gender":"female","name":{"title":"ms","first":"brooklyn","last":"kennedy"},"location":{"street":"1150 e sandy lake rd","city":"woodbridge","state":"idaho","postcode":16935},"email":"brooklyn.kennedy@example.com","login":{"username":"brownbird763","password":"gong","salt":"99OBMVMr","md5":"f5f2cec01cd6353743fd2eeb3ab795c2","sha1":"7e740a22d8ccdade8260e5c4254c0ac8039c1865","sha256":"04f848233793863f915e3e70e8bccfd342573e614076c3e74fb992a0f5f22e5f"},"dob":"1969-10-22 00:15:29","registered":"2016-07-06 02:20:23","phone":"(692)-303-7413","cell":"(140)-596-1842","id":{"name":"SSN","value":"687-10-4783"},"picture":{"large":"https://randomuser.me/api/portraits/women/24.jpg","medium":"https://randomuser.me/api/portraits/med/women/24.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/24.jpg"},"nat":"US"},{"gender":"male","name":{"title":"mr","first":"travis","last":"russell"},"location":{"street":"6421 edwards rd","city":"celina","state":"nebraska","postcode":67307},"email":"travis.russell@example.com","login":{"username":"redostrich256","password":"army","salt":"3siXuzl0","md5":"30e2ff3c861b41c0f3eb70d1bcbfffad","sha1":"dc62e1d40226108c233bf7b80b533e2a7afbb75c","sha256":"9c226d96ae2323990fd1d03c62401b1a4f8dff4469c7f648bd626eed8d9afcb0"},"dob":"1963-01-04 23:54:04","registered":"2003-06-03 16:12:53","phone":"(399)-891-0756","cell":"(089)-175-9176","id":{"name":"SSN","value":"422-01-1281"},"picture":{"large":"https://randomuser.me/api/portraits/men/70.jpg","medium":"https://randomuser.me/api/portraits/med/men/70.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/70.jpg"},"nat":"US"},{"gender":"male","name":{"title":"mr","first":"warren","last":"chavez"},"location":{"street":"8255 hickory creek dr","city":"indianapolis","state":"nevada","postcode":43867},"email":"warren.chavez@example.com","login":{"username":"tinyelephant371","password":"flash1","salt":"ZnMoUFwl","md5":"eebfecd7bc81cc6352eb2558099288b4","sha1":"139149223d67c3f77069edddf16d422d1308b8aa","sha256":"86162230abb7fa2b4a6dcb0a17e2ed385938a17c809bf31f5efadf40764839c9"},"dob":"1960-02-03 14:45:20","registered":"2012-07-25 23:00:21","phone":"(272)-609-3940","cell":"(181)-792-5754","id":{"name":"SSN","value":"864-82-3235"},"picture":{"large":"https://randomuser.me/api/portraits/men/67.jpg","medium":"https://randomuser.me/api/portraits/med/men/67.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/67.jpg"},"nat":"US"}

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

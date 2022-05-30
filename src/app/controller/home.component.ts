import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: '../view/home.html',
})
export class Home{
  cover = 'https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1068.jpg?w=740&t=st=1653764166~exp=1653764766~hmac=bb1220ec25a296fc9a1934d58a4ad719b4e8a014582cbe6ad09f7b6ba99e1857';
  title = 'Angular Web Dev';
  description = 'Layanan pembuatan website dengan angular untuk modern situs mu.';
  content = `
			Saatnya kini membangun situs website modern menggunakan angular untuk solusi terbaik,
			dengan skema single page app menjadikan kemewahaan dan kecepatan tersemat dalam kebutuhan project pembuatan situs modern mu dengan angular. 
			Download node js kemudian install pada device mu , 
			Sekarang saatnya melakukan installasi angular , buka terminal mu dan jalankan " npm install -g @angular/cli "`;  
  cover1 = 'https://img.freepik.com/free-vector/creativity-concept-illustration_114360-1083.jpg?w=740&t=st=1653764537~exp=1653765137~hmac=41da35984f626ec8f6947fb0e35292f68a5e8559ea25c42aa1cd6b5ff3b540e8';
  sctitle1 = 'Angular MVC';
  scdescription1 = 'Saatnya kini download angular MVC source code free download gratis !!';
  sccontent1 = `
				Hey dan sekarang lah saatnya mencoba mempelajari bagaimana unik dan menarik nya angular bekerja untuk mu dengan mengunduh 
				source code kami ini untuk membantu mu dalam mengembangkan sebuah website modern berbasis angular.
				Setelah melakukan unduhan selanjutnya kamu bisa membuka seluruh kode nya dengan kode editor kamu , 
				rekomendasi gunakan visual code studio dan mulai mencoba untuk melakukan update pada situs angular mvc mu.
				Oke sekarang saat nya kita download angular mvc dengan cara buka terminal kamu dan kini jalankan "git clone https://github.com/mesinkasir/angular-mvc.git "
				`;
  productioncover = 'https://img.freepik.com/free-vector/market-launch-concept-illustration_114360-1498.jpg?t=st=1653758102~exp=1653758702~hmac=b66322bf29e52473d3c29ccd8c5be96251f4c9c25458f0029d2a95a06fe5d7e0&w=826';
  productiontitle = 'Angular Cloud';
  productiondescription = 'Saatnya online kan website angular modern mu sekarang !!';
  productioncontent = `
						Dan ya setelah kamu melakukan berbagai perubahan dan siap untuk di online kan, maka setelah melakukan update dari source code sesuai kebutuhan kamu , 
						maka kini saat nya kita meningkatkan nya ke production mode, bagaimana kah cara nya ?? open terminal kamu lagi dan run "ng build" dan nantinya angular akan menaikan project kamu ke production mode.
						setelah proses ini dilakukan maka akan ada dist folder, dan kamu bisa upload dist folder ke static hosting kamu, misalnya ke firebase, surge dan lain nya, atau untuk cara tercepat kamu tinggal fork saja project kami.
						lalu daftar ke static host seperti netlify, vercel, heroku dan regristasi menggunakan github account kalian, kemudian klik add new web / project integrasikan dengan fork repo angular mvc, dan deploy !! maka situs kamu sudah online dengan cepat.
						`;
  sectioncover1 = 'https://img.freepik.com/free-vector/processing-concept-illustration_114360-1395.jpg?t=st=1653758102~exp=1653758702~hmac=f7700f5b3e3ed4bfc5d6683b7f48d4007ed9657ebe7340ab33d7d8b781511731&w=740';
  sectiontitle1 = 'Angular Design';
  sectiondescription1 = 'View mode dengan angular MVC untuk design web mu';
  sectioncontent1 = `
					Tau kah kamu, dengan menggunakan angular mvc source code dari kami axcora technology ini , kini kamu dengan mudah bisa merubah dan melakukan desain view folder.
					Bekerja dengan html template semakin nyaman dan cepat dalam implementasi desain mu dengan angular.
					`;
  sectioncover2 = 'https://img.freepik.com/free-vector/designer-concept-illustration_114360-676.jpg?t=st=1653758102~exp=1653758702~hmac=db41d5e35d0bbb7d1424faf1230727d9a56599e6b06daaa81f41068d53978d11&w=740';
  sectiontitle2 = 'Angular API';
  sectiondescription2 = 'Integrasikan dengan content management system backend mu';
  sectioncontent2 = `
					Dan kini dengan technology dari negara API kita bisa memanfaatkan intergasi API dari backend untuk membuat website lebih modern dengan angular, 
					kamu bisa menggunakan backend dengan laravel atau codeigniter misalnya, 
					semua dapat dilakukan.
					`;
  cover5 = 'https://img.freepik.com/free-vector/design-community-concept-illustration_114360-1244.jpg?t=st=1653758102~exp=1653758702~hmac=8f9a9cc229df1cabeef2a60def9ad05799a90d33b2a1bb1db1a2f6aca1572f57&w=826';
  title5 = 'Angular Android';
  description5 = 'Kini semakin mudah membuat android app bundle dengan angular';
  content5 = `
			Dengan capacitor dan cordova membuat aplikasi android menggunakan angular semakin cepat dan mudah, 
			ya technology dari cordova maupun capacitor memungkinkan kita membanguna aplikasi android, bahkan untuk upload ke playstore.
			`;
  cover6 = 'https://img.freepik.com/free-vector/office-concept-illustration_114360-1248.jpg?t=st=1653758102~exp=1653758702~hmac=f2ecff36aadaad100831271916de6eae43f978c4acb61cc157d3bff69422243c&w=826';
  title6 = 'Angular CMS';
  description6 = 'Dan kamu bisa download juga angular cms source code kami.';
  content6 = `
			Ya axcora technology juga membuat sebuah content management system project berbasis angular dengan menggunakan realtime firebase database untuk bekerja, 
			dilengkapi dengan admin backend hingga text form untuk membuat content article semakin mudah dengan phoneixs angular web app.
			`;
  cover7 = 'https://img.freepik.com/free-vector/alone-concept-illustration_114360-2393.jpg?t=st=1653758102~exp=1653758702~hmac=b997bab7dbe133171df7b17668ebd069d64931174713142cec3f7d7f98671672&w=826';
  title7 = 'Angular Next Generation';
  description7 = 'Dan tatap masa depan website modern mu dengan angular';
  content7 = `
			Tatap masa depan technology website modern dengan menggunakan angular untuk build project situs mu, sensasi , kecepatan , kelengkapan, kestabilan dengan menggunakan angular . saatnya menjadi angular lovers sekarang, pelajari dan mulai bekerja dengan angular. 
			`;
}

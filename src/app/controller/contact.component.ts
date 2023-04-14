import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: '../view/contact.html',
})
export class Contact{
  cover = 'https://img.freepik.com/free-vector/design-community-concept-illustration_114360-1244.jpg?t=st=1653758102~exp=1653758702~hmac=8f9a9cc229df1cabeef2a60def9ad05799a90d33b2a1bb1db1a2f6aca1572f57&w=826';
  title = 'Contact Angular Web Dev';
  description = 'Hubungi Angular MVC web developer.';
  content = `
			Silahkan hubungi kami untuk kebutuhan pengembangan situs modern dengan menggunakan angular , buat website modern dengan angular bersama kami.`;  
  phone = '+628955339403223';
  wa = '+62895339403223';
  tel = 'tel:+62895339403223';
  was = 'https://wa.me/62895339403223';
  mail = 'axcora@gmail.com';
  email = 'mailto:axcora@gmail.com';
}

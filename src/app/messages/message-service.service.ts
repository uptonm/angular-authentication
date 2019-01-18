import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Message } from '../shared/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private bobRoss: string = `Everyone wants to enjoy the good parts - but you have to build the framework first. Life is too short to be alone, too precious. Share it with a friend. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. Isn't it great to do something you can't fail at? \n
  We might as well make some Almighty mountains today as well, what the heck. You can create beautiful things - but you have to see them in your mind first. The least little bit can do so much. Now then, let's play. \n
  Volunteering your time; it pays you and your whole community fantastic dividends. Painting should do one thing. It should put happiness in your heart. In painting, you have unlimited power. You have the ability to move mountains. Nothing's gonna make your husband or wife madder than coming home and having a snow-covered dinner. \n
  Get tough with it, get strong. This is a happy place, little squirrels live here and play. It is a lot of fun. \n
  It's a super day, so why not make a beautiful sky? Let your heart be your guide. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. We spend so much of our life looking - but never seeing. \n
  When you buy that first tube of paint it gives you an artist license. Very easy to work these to death. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. If you hypnotize it, it will go away. \n
  How do you make a round circle with a square knife? That's your challenge for the day. Just go back and put one little more happy tree in there. In your world you have total and absolute power. You're meant to have fun in life. In your world you can create anything you desire. \n
  `;
  private messages: Message[] = [
    new Message(
      new User(
        'Mike',
        'Upton',
        'uptonm@wit.edu',
        'assets/images/matthew.png',
        'I am not good at making bios'
      ),
      new User(
        'Rachel',
        'Sorrins',
        'sorrinsr@complet.io',
        'assets/images/rachel.png',
        'Something about dogs would probably fit well here. DOGS!'
      ),
      // tslint:disable-next-line
      "Bob Ross Ipsum Generator, I'm dead",
      this.bobRoss
    ),
    new Message(
      new User(
        'Mike',
        'Upton',
        'uptonm@wit.edu',
        'I am not good at making bios',
        'assets/images/matthew.png'
      ),
      new User(
        'Lindsay',
        'Smith',
        'smithl@harperdb.io',
        'assets/images/lindsay.png',
        'Something about dogs would probably fit well here. DOGS!'
      ),
      'Subject goes here2',
      'The quick fox jumped over the lazy brown dog'
    ),
    new Message(
      new User(
        'Mike',
        'Upton',
        'uptonm@wit.edu',
        'assets/images/matthew.png',
        'I am not good at making bios'
      ),
      new User(
        'Veronika',
        'Sommers',
        'sommers@drift.io',
        'assets/images/veronika.jpg',
        'Something about dogs would probably fit well here. DOGS!'
      ),
      'Subject goes here3',
      'The quick fox jumped over the lazy brown dog'
    ),
    new Message(
      new User(
        'Mike',
        'Upton',
        'uptonm@wit.edu',
        'assets/images/matthew.png',
        'I am not good at making bios'
      ),
      new User(
        'Jenny',
        'Albrite',
        'albritej@contago.org',
        'assets/images/jenny.jpg',
        'Something about dogs would probably fit well here. DOGS!'
      ),
      'Subject goes here5',
      'The quick fox jumped over the lazy brown dog'
    )
  ];
  constructor() {}

  getMessages(): Message[] {
    return this.messages;
  }
}

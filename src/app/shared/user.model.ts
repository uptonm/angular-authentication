export class User {
  private id: string = '';
  private friends: User[] = [];
  private bio: string = '';
  constructor(
    private first: string,
    private last: string,
    private email: string,
    private imagePath: string,
    bio?: string,
    friends?: User[]
  ) {
    this.id = this.generateId();
    this.bio = bio;
    this.friends = friends;
  }

  generateId(): string {
    return '' + Math.floor(Math.random() * 10000000);
  }

  updateBio(bio: string): void {
    this.bio = bio;
  }

  updateEmail(email: string): void {
    this.email = email;
  }

  addFriend(friend: User): void {
    this.friends.push(friend);
  }

  removeFriend(friend: User): void {
    this.friends.filter(currFriend => {
      return currFriend.email !== friend.email;
    });
  }
}

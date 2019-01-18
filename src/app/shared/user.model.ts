export class User {
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
    this.bio = bio;
    this.friends = friends;
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

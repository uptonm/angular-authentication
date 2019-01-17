import { User } from './user.model';
export class Message {
  constructor(
    private to: User,
    private from: User,
    private subject: string,
    private body: string
  ) {}
}

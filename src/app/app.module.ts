import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MessagesComponent } from './messages/messages.component';
import { FriendsComponent } from './friends/friends.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageViewComponent } from './messages/message-view/message-view.component';
import { ProfileComponent } from './profile/profile.component';
import { ImageGalleryComponent } from './profile/image-gallery/image-gallery.component';
import { AuthGuardService } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MessagesComponent,
    FriendsComponent,
    MessageListComponent,
    MessageViewComponent,
    ProfileComponent,
    ImageGalleryComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}

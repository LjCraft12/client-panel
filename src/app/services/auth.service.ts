import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }
login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => (userData),
          err => reject(err));
    });
  }

  // Check user status
  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }
  // Logout user
  logout() {
    this.afAuth.auth.signOut();
  }
  // Register User
  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }
}

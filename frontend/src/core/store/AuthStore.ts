import { Exome } from "exome";

class AuthStore extends Exome {
  // State
  public token: string = "";
  public loggedIn: boolean = true;
  public modalOpen: boolean = false;

  // Actions
  public setToken(token: string) {
    this.token = token;
  }

  public setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }

  public setModalOpen(modalOpen: boolean) {
    this.modalOpen = modalOpen;
    console.log(this.modalOpen);
  }
}

export const authStore = new AuthStore();

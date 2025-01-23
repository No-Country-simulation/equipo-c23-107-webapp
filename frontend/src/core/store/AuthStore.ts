import { Exome } from "exome";
import { supabase } from "../service/AuthClient";

class AuthStore extends Exome {
  public token: string = "";
  public loggedIn: boolean = true;
  public modalOpen: boolean = false;

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

  public async login(email: string, password: string) {
    console.log(import.meta.env.VITE_SUPABASE_URL);
    console.log(import.meta.env.VITE_SUPABASE_KEY);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log(error.message);
    } else {
      this.setToken(data.session?.access_token || "");
      this.setLoggedIn(true);
      console.log(this.token);
    }
  }

  public async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
    } else {
      this.setToken("");
      this.setLoggedIn(false);
    }
  }

  public async signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log(error.message);
    } else {
      console.log(data);
    }
  }
}

export const authStore = new AuthStore();

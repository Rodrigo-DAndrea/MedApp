export type RootStackParameters = {
    Home: undefined;
    Register: undefined;
    Login: undefined;
    ShowList: undefined;
    AddClient: undefined;
    Edit: {
    userName: string,
    userSurname: string,
    userEmail: string,
    userId: string,
    }

};

export type IRegister = {
    nickName: string;
    password: string;
};

export type ILogin = {
    nickName: string;
    password: string;
  }

export type IItem = {
    name: string;
    surname: string;
    email: string;
    id: string;
}






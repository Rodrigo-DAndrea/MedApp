export type RootStackParameters = {
    Home: undefined;
    Register: undefined;
    Login: undefined;
    ShowList: undefined;
    AddClient: undefined;
    Edit: {
        selectedClient: {
            name: string;
            surname: string;
            email: string;
            id: string;
        }
    };
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





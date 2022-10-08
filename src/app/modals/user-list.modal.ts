export interface UserModal {
    id: number,
    name: string,
    email: string,
    contactnumber: number,
    address: string;
}

// export interface UserTest {
//     name: string | null;
// }

export interface UserTestModal {
    users: UserModal[];
}
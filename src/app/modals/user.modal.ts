import { UserModal } from './user-list.modal';

export class User {
    constructor(
        public userList: UserModal[],
        public id: number
    ) { }
}

export class UserFailureModal {
    constructor(
        public userListFail: any,
        public id : number
    ) { }
}
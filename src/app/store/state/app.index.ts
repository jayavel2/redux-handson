 import { UserModal } from "src/app/modals/user-list.modal";

export interface AppState {
  userListSuccessRes: UserModal[];
  isUserList: any,
  userListFailureRes: any,
  showLoading: boolean
}
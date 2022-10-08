import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { UserModal, UserTestModal } from "src/app/modals/user-list.modal";

export interface AppState {
  userListSuccessRes: UserModal[];
  isUserList: any,
  userListFailureRes: any,
  showLoading: boolean
}

export interface State extends EntityState<UserModal> {}

export const adapter: EntityAdapter<UserModal> = createEntityAdapter<UserModal>();

export const userInitialState: State = adapter.getInitialState();

import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { UserModal } from "src/app/modals/user-list.modal";

export interface State extends EntityState<UserModal> { }

export const adapter: EntityAdapter<UserModal> = createEntityAdapter<UserModal>({
    selectId: (userModal: UserModal) => userModal.id
});

export const userInitialState: State = adapter.getInitialState();

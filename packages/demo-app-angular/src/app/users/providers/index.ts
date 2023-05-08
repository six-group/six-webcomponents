import { UsersFacade } from './users.facade';
import { UsersGuard } from './users.guard';
import { UsersService } from './users.service';

export const providers = [UsersFacade, UsersGuard, UsersService];

export { UsersFacade };

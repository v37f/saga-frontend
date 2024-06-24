import { Customer } from 'src/utils/mock/currentUserMockData';
import { ICurrentUserType } from 'src/utils/types';

export const getCurrentUser = async () => {
  //regions from server
  const CurrentUserDataFromServer: ICurrentUserType = Customer;
  const res = await Promise.resolve(CurrentUserDataFromServer);

  return res;
};

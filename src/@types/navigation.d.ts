import { RootStackParamList } from '../routes/app.routes';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

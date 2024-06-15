import { expect } from 'chai';

import { router } from './router';
import { Routes } from '../../../main';
import Auth from '../../pages/auth/auth';
import Registration from '../../pages/registration/registration';
import Profile from '../../pages/profile/profile';

describe('Router and Pages Tests', () => {
  const baseUrl = 'http://localhost:5173';
  before(() => {
    router.use(Routes.Login, Auth);
    router.use(Routes.Register, Registration);
    router.use(Routes.Profile, Profile);
  });

  it('should navigate to the specified routes', () => {
    router.go(Routes.Login);
    expect(window.location.href).to.equal(`${baseUrl}${Routes.Login}`);

    router.go(Routes.Register);
    expect(window.location.href).to.equal(`${baseUrl}${Routes.Register}`);

    router.go(Routes.Profile);
    expect(window.location.href).to.equal(`${baseUrl}${Routes.Profile}`);
  });
});

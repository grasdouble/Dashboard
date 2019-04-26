import { getUserInformations } from './queries';

describe('test', () => {
	it('try it', () => {
        return getUserInformations().then(data => {
            data = {user: data.user};
            expect(data.user).toBeDefined();
            expect(data.user.avatarUrl).toBeDefined();
            expect(data.user.bio).toBeDefined();
            expect(data.user.company).toBeDefined();
            expect(data.user.createdAt).toBeDefined();
            expect(data.user.email).toBeDefined();
            expect(data.user.followers).toBeDefined();
            expect(data.user.following).toBeDefined();
            expect(data.user.name).toBeDefined();
            expect(data.user.watching).toBeDefined();
          });
    });
});
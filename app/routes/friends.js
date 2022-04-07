import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FriendsRoute extends Route {
  queryParams = {
    sort: { refreshModel: true }
  }

  @service store;

  async model({ sort }) {
    const friends = await this.store.query('friend', { sort })
    return friends.map(friend => friend.toJSON())
  }
}

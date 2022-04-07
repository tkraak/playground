import Controller from '@ember/controller';
// import { tracked } from '@glimmer/tracking';

export default class FriendController extends Controller {
  // queryParams = ['sort'];

  // @tracked sort = null;
  sort = 'first-name';

  columns = [
    {
      name: 'First Name',
      valuePath: 'firstName',
      component: 'custom-header',
    },
    {
      name: 'Last Name',
      valuePath: 'lastName',
      component: 'custom-header',
    },
    {
      name: 'Email Address',
      valuePath: 'email',
      component: 'custom-header',
    },
    {
      name: 'Twitter Handle',
      valuePath: 'twitter',
      component: 'custom-header',
    },
  ];

  sorts = [
    {
      valuePath: 'firstName',
      isAscending: true
    }
  ];

  updateSorts(sortOrder) {
    console.log(sortOrder)
    this.sorts = sortOrder
  }
}

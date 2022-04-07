import { action, computed } from '@ember/object';
import { dasherize } from '@ember/string';
import Component from '@ember/component';

export default class CustomComponent extends Component {
  classNameBindings = ['isSorted:sorted']

  @computed('field')
  get dasherizedField() {
    return dasherize(this.field).toLowerCase();
  }

  _inverseSort(sortField) {
    if (sortField.substring(0, 1) === '-') {
      return sortField.substring(1);
    } else {
      return `-${sortField}`;
    }
  }

  @computed('dasherizedField', 'sort')
  get isSorted() {
    return (
      this.sort === this.dasherizedField ||
      this.sort === this._inverseSort(this.dasherizedField)
    );
  }

  @computed('dasherizedField', 'sort')
  get sortOrder() {
    if (this.sort === this.dasherizedField) {
      return 'asc';
    } else if (this.sort === `-${this.dasherizedField}`) {
      return 'desc';
    } else {
      return '';
    }
  }

  @action
  inverseSort() {
    if (this.sortOrder) {
      this.set('sort', this._inverseSort(this.sort));
    } else {
      this.set('sort', this.dasherizedField);
    }
  }
}

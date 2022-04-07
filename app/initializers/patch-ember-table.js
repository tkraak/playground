import { next } from '@ember/runloop';
// eslint-disable-next-line ember/no-observers
import { observer } from '@ember/object';
import EmberTd from 'ember-table/components/ember-td/component';
import EmberTh from 'ember-table/components/ember-th/component';
import VerticalCollection from '@html-next/vertical-collection/components/vertical-collection/component';

const updateStyles = function () {
  let { element } = this;
  if (typeof FastBoot === 'undefined' && element) {
    let { isFixedLeft } = this;
    let colMetaWidth = this.columnMeta?.width;
    // reset DEFAULT_COLUMN_WIDTH
    element.style.width = colMetaWidth === 100 ? '' : `${colMetaWidth}px`;
    // we need to be able to set the width of the first column
    if (isFixedLeft) {
      element.style.minWidth = colMetaWidth === 100 ? '' : `${colMetaWidth}px`;
      element.style.maxWidth = colMetaWidth === 100 ? '' : `${colMetaWidth}px`;
    }
  }
};

export function initialize() {
  // EmberTd.reopen({ updateStyles });
  // EmberTh.reopen({ updateStyles });

  // VerticalCollection.reopen({
  //   oneMoreUpdate: observer('items.[]', function () {
  //     next(() => {
  //       if (this.isDestroyed) {
  //         return;
  //       }

  //       this._radar.scheduleUpdate(true);
  //     });
  //   }),
  // });
}

export default {
  name: 'patch-ember-table',
  initialize,
};

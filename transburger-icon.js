Polymer({

  is: 'transburger-icon',
  extends: 'button',

  properties: {
    /**
     * Hamburger icon transformation.
     * Possible values: `close`, `back`.
     */
    transformTo: {
      type: String,
      value: 'close',
      observer: '_transformToObserver'
    },

    /**
     * Where to place the hamburger icon when the button has text
     * or other contents inside it.
     * Possible values: `left`, `right`.
     */
    iconPosition: {
      type: String,
      value: 'left',
      reflectToAttribute: true
    },

    /**
     * If true, the second icon (close or back) will be shown initially.
     */
    active: {
      type: Boolean,
      value: false,
      observer: '_activeObserver'
    }
  },

  listeners: {
    'click': 'toggleIcon'
  },

  toggleIcon: function() {
    this.active = !this.active;
  },

  _transformToObserver: function() {
    this.$.icon.classList.add('t-icon--' + this.transformTo);
  },

  _activeObserver: function() {
    this.$.icon.classList.toggle('is-active', this.active);
    this.fire('transburger-icon-changed', {
      icon: this.active ? this.transformTo : 'menu'
    });
  }
});

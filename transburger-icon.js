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
    }
  },

  listeners: {
    'click': '_onClick'
  },

  _onClick: function() {
    this.$.icon.classList.toggle('is-active');
  },

  _transformToObserver: function() {
    this.$.icon.classList.add('t-icon--' + this.transformTo);
  }
});

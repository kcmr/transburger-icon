Polymer({

  is: 'transburger-icon',
  extends: 'button',

  properties: {
    /**
     * Hamburger icon transformation.
     * Possible values: `close`, `arrow-left`, `arrow-right`.
     */
    transformTo: {
      type: String,
      value: 'close'
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
     * If true, the second icon will be shown initially.
     */
    active: {
      type: Boolean,
      value: false,
      observer: '_activeObserver'
    },

    /**
     * If true, the icon won't be changed after clicking the button.
     * Use this attribute if you need to change the icon programmatically.
     */
    noTransform: {
      type: Boolean,
      value: false,
      observer: '_noTransformObserver'
    }
  },

  detached: function() {
    if (!this.noTransform) {
      this.unlisten(this, 'click', 'toggleIcon');
    }
  },

  /**
   * Changes the icon.
   */
  toggleIcon: function() {
    this.active = !this.active;
  },

  _activeObserver: function() {
    this.toggleClass('is-active', this.active, this.$.icon);
    this.fire('icon-changed', {
      icon: this.active ? this.transformTo : 'menu'
    });
  },

  _noTransformObserver: function() {
    if (this.noTransform) {
      this.unlisten(this, 'click', 'toggleIcon');
    } else {
      this.listen(this, 'click', 'toggleIcon');
    }
  }

  /**
   * Fired when the icon is changed.
   * @event icon-changed
   * @param {{icon: String}} detail Icon displayed.
   */
});

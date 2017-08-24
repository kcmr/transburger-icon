import {Element} from '../node_modules/@polymer/polymer/polymer-element.js';

export const TransburgerIcon = class extends Element {
  static get template() {
    return `
      <style>
      :host{display:inline-block}:host([hidden]){display:none}button{border:var(--transburger-icon-button-border,0);margin:var(--transburger-icon-button-margin,0);padding:var(--transburger-icon-button-padding,0);overflow:var(--transburger-icon-button-overflow,visible);vertical-align:var(--transburger-icon-button-vertical-align,middle);font-family:var(--transburger-icon-button-font-family,inherit);font-size:var(--transburger-icon-button-font-size,var(--transburger-icon-height,14px));color:var(--transburger-icon-button-color,inherit);cursor:var(--transburger-icon-button-cursor,initial);outline:var(--transburger-icon-button-outline,initial);border-radius:var(--transburger-icon-button-border-radius,initial);box-shadow:var(--transburger-icon-button-box-shadow,none);background:var(--transburger-icon-button-background,#ccc)}button::-moz-focus-inner{padding:0;border:0}.t-icon-wrapper{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}:host([icon-position="right"]) button .t-icon-content{-webkit-order:-1;-ms-flex-order:-1;order:-1}.t-icon{font-size:var(--transburger-icon-height,inherit);width:var(--transburger-icon-width,1.42857em);height:1em;margin:var(--transburger-icon-margin,0.85714em);color:currentColor;position:relative}.t-icon__middle,.t-icon::after,.t-icon::before{width:100%;height:0.14286em;background:currentColor;border-radius:var(--transburger-icon-line-radius,2px);position:absolute;margin:auto}.t-icon::after,.t-icon::before{content:"";display:block}.t-icon::before{top:0}.t-icon::after{bottom:0}.t-icon__middle{top:0;bottom:0}.t-icon--arrow-left::before,.t-icon--arrow-left::after,.t-icon--arrow-right::before,.t-icon--arrow-right::after{transition:-webkit-transform 0.2s cubic-bezier(0.51,0.2,0.31,0.85);transition:transform 0.2s cubic-bezier(0.51,0.2,0.31,0.85);transition:transform 0.2s cubic-bezier(0.51,0.2,0.31,0.85),-webkit-transform 0.2s cubic-bezier(0.51,0.2,0.31,0.85)}.t-icon--arrow-left.is-active::before{-webkit-transform:translate3d(-0.35714em,calc(1em / 7),0) rotate(-40deg) scaleX(0.7);transform:translate3d(-0.35714em,calc(1em / 7),0) rotate(-40deg) scaleX(0.7)}.t-icon--arrow-left.is-active::after{-webkit-transform:translate3d(-0.35714em,calc(-1em / 7),0) rotate(40deg) scaleX(0.7);transform:translate3d(-0.35714em,calc(-1em / 7),0) rotate(40deg) scaleX(0.7)}.t-icon--arrow-right.is-active::before{-webkit-transform:translate3d(0.35714em,calc(1em / 7),0) rotate(40deg) scaleX(0.7);transform:translate3d(0.35714em,calc(1em / 7),0) rotate(40deg) scaleX(0.7)}.t-icon--arrow-right.is-active::after{-webkit-transform:translate3d(0.35714em,calc(-1em / 7),0) rotate(-40deg) scaleX(0.7);transform:translate3d(0.35714em,calc(-1em / 7),0) rotate(-40deg) scaleX(0.7)}.t-icon--close::before,.t-icon--close::after{-webkit-transform:rotate(0);transform:rotate(0)}.t-icon--close::before{bottom:calc(100% - .14286em);transition:bottom .2s .24s ease,-webkit-transform .2s ease;transition:transform .2s ease,bottom .2s .24s ease;transition:transform .2s ease,bottom .2s .24s ease,-webkit-transform .2s ease}.t-icon--close::after{top:calc(100% - .14286em);transition:top .2s .24s ease,-webkit-transform .2s ease;transition:transform .2s ease,top .2s .24s ease;transition:transform .2s ease,top .2s .24s ease,-webkit-transform .2s ease}.t-icon--close .t-icon__middle{transition:opacity .2s}.t-icon--close.is-active .t-icon__middle{opacity:0}.t-icon--close.is-active::before{bottom:0;-webkit-transform:rotate(45deg);transform:rotate(45deg);transition:bottom .2s ease,-webkit-transform .2s .24s ease;transition:bottom .2s ease,transform .2s .24s ease;transition:bottom .2s ease,transform .2s .24s ease,-webkit-transform .2s .24s ease}.t-icon--close.is-active::after{top:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);transition:top .2s ease,-webkit-transform .2s .24s ease;transition:top .2s ease,transform .2s .24s ease;transition:top .2s ease,transform .2s .24s ease,-webkit-transform .2s .24s ease}
      </style>

      <button type$="[[type]]" disabled$="[[disabled]]" on-click="_onClick">
        <div class="t-icon-wrapper">
          <div class$="t-icon t-icon--{{transformTo}}" id="icon">
            <div class="t-icon__middle"></div>
          </div>

          <div class="t-icon-content">
            <slot></slot>
          </div>
        </div>
      </button>
    `;
  }

  static get is() {
    return 'transburger-icon';
  }

  static get properties() {
    return {
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
        value: false
      },

      /**
       * Button type (button, submit, etc.)
       */
      type: String,

      /**
       * Disabled button.
       */
      disabled: {
        type: Boolean,
        value: false
      }
    };
  }

  constructor() {
    super();
  }

  /**
   * Changes the icon.
   */
  toggleIcon() {
    this.active = !this.active;
  }

  /**
   * Fired when the icon is changed.
   * @event transburger-icon-changed
   * @param {{icon: String}} detail Icon displayed.
   */
  _activeObserver(active) {
    this.$.icon.classList.toggle('is-active', active);
    this.dispatchEvent(new CustomEvent('transburger-icon-changed', {
      detail: { icon: active ? this.transformTo : 'menu' },
      bubbles: true, composed: true
    }));
  }

  _onClick() {
    if (this.noTransform) {
      return;
    }

    this.toggleIcon();
  }
}

window.customElements.define(TransburgerIcon.is, TransburgerIcon);

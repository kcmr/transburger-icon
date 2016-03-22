Polymer({

  is: 'transburger-icon',
  
  properties: {
    /**
     * Describes the title of the element, but is really just an excuse to
     * show off JSDoc annotations.
     *
     * @type {{title: string, image: string}}
     */
     project: {
       type: Object,
       value: function() {
         return {
           title: 'Cells',
           image: '../images/cells.svg'
         };
       }
     }
  }
});

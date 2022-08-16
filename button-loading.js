/******************
 * BASIC PLUGIN
 *****************/

/**
 * Plugin jQuery button loading for Bootstrap 5
 * Usage : $(el).btn('loading'); - $(el).btn('reset');
 * Html : <button ... data-loading-text="Loading..." (** accept also html like spinner icon)>My button</button>
 * Optional param : true (conserve button width) || false (standard mode)
 */
(function($) {
    $.fn.btn = function(action, conserve_btn_width=true)
    {
        if (action === 'loading' && this.data('loading-text')) {
            (conserve_btn_width?$(this).css('width', this.outerWidth()):'');
            this.data('original-text', this.html()).html(this.data('loading-text')).prop('disabled', true);
        }

        if (action === 'reset' && this.data('original-text')) {
            (conserve_btn_width?$(this).css('width', 'auto'):'');
            this.html(this.data('original-text')).prop('disabled', false);
        }
    };
}(jQuery));


/******************
 * ADVANCED PLUGIN
 *****************/

/**
 * Plugin jQuery button loading for Bootstrap 5 - disable other buttons on loading (data-attribute)
 * Usage : $(el).btn('loading'); - $(el).btn('reset');
 * Html : <button ... data-relationals="#button2,#buttonxxx" (** accept id and class) data-loading-text="Loading..." (** accept also html like spinner icon)>My button</button>
 * Optional param : true (conserve button width) || false (standard mode)
 */
(function($) {
    $.fn.btn = function(action, conserve_btn_width=true)
    {
        let relationals = (this.data('relationals')?this.data('relationals').split(','):[]);

        if (action === 'loading' && this.data('loading-text'))
        {
            $.each(relationals, function(id, el){
                $(el).prop('disabled', true);
            });

            (conserve_btn_width?$(this).css('width', this.outerWidth()):'');
            this.data('original-text', this.html()).html(this.data('loading-text')).prop('disabled', true);
        }

        if (action === 'reset' && this.data('original-text'))
        {
            $.each(relationals, function(id, el){
                $(el).prop('disabled', false);
            });

            (conserve_btn_width?$(this).css('width', 'auto'):'');
            this.html(this.data('original-text')).prop('disabled', false);
        }
    };
}(jQuery));

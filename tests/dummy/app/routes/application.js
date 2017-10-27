import Route from '@ember/routing/route';
import { getProperties } from '@ember/object';

import ScrollMagicControllerMixin from 'ember-scrollmagic/mixins/application-controller-mixin';

export default Route.extend(
  ScrollMagicControllerMixin, {

    title(tokens) {
      return tokens.length ?
        `${tokens.join(' – ')} – Ember ScrollMagic` :
        'Ember ScrollMagic';
    },

    metadata() {
      let { baseURL, rootURL } = getProperties(this, 'baseURL', 'rootURL');
      return {
        appName: `Ember ScrollMagic`,
        description: `An Ember addon for using ScrollMagic - the javascript library for magical scroll interactions.`,
        keywords: `ember-addon, scrollMagic, scroll, scrolling, animation, sticky, pin, fixed, scrollbar, scrub, sync, position, progress, parallax`,
        image: `${baseURL}${rootURL}images/facebook.jpg`,
        favicon: `${baseURL}${rootURL}images/favicon`
      };
    }

});

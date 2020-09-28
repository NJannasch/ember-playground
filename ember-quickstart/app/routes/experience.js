import Route from '@ember/routing/route';

export default class ExperienceRoute extends Route {
    model() {
        return ['First Exp', 'Second Exp', 'Third Exp'];
      }
}

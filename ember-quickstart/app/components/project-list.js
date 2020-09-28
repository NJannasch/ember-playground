import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ProjectListComponent extends Component {
  @action
  likeProject(project) {
    alert(`You liked project ${project}!`);
  }
}
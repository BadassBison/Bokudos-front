import Component from '../interfaces/component';

export default function component() {
  return <T extends Component>(constructor: T) => {
    return constructor;
  };
}

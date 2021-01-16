export default interface Component {
  selector: string;
  register(): void;
  buildComponent(props: any): any;
}

import Logo from "../miscallaneous/Logo";
import Nav from "../miscallaneous/Nav";

export default function Header(props) {
  return (
    <header>
      <Nav setMenu={props.setMenu} />
      <Logo />
    </header>
  );
}

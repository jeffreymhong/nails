import Logo from "../miscallaneous/Logo";
import Nav from "../miscallaneous/Nav";

export default function Header(props) {
  return (
    <header>
      <Nav setPage={props.setPage} />
      <Logo />
    </header>
  );
}

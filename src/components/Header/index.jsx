import { Container } from "./styles";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <div className="brand">
        <img src={logo} alt="Icon logo" />
        <h1>fullstackweek</h1>
      </div>
    </Container>
  );
}

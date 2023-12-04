import { Container } from "./styles";

import logo from "../../assets/logo.svg";
import { Button } from "../Button";

import { FiMenu, FiUser } from "react-icons/fi";

export function Header() {
  return (
    <Container>
      <div className="brand">
        <img src={logo} alt="Icon logo" />
        <h1>fullstackweek</h1>
      </div>

      <div className="btn-actions-user">
        <Button icon={FiMenu} />
        <Button icon={FiUser} />
      </div>
    </Container>
  );
}

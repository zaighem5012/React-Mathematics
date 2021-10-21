import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0;
  margin-bottom: 0;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link className="path" to="/addition">
          Addition
        </Link>
      </li>
      <li>
        <Link className="path" to="/substraction">
          Substraction
        </Link>
      </li>
      <li>
        <Link className="path" to="/division">
          Division
        </Link>
      </li>
      <li>
        <Link className="path" to="/multiplication">
          Multiplication
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;

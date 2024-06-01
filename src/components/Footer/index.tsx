import React from "react";
import UnitLogo from "../../assets/unit.png"
const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-4">
      <img src={UnitLogo} className="w-12 h-auto" alt="logo unit"/>
      <p className="text-sm text-gray-400 m-0">
        Criado por Anna Nayara, Guilherme Ramos, João Arthur e Pedro Arthur
      </p>
    </footer>
  );
};

export default Footer;

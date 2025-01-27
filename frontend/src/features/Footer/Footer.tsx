import React from "react";
import FooterLink from "./FooterLink";
import Logo from "../../components/Logo";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      logo: "../../../public/Ayuda_logo.svg",
      text: "Ayuda",
      link: "/ayuda",
    },
    {
      logo: "../../../public/Comunidad.svg",
      text: "Normas de la Comunidad",
      link: "/normas",
    },
    {
      logo: "../../../public/Terminos.svg",
      text: "Términos y condiciones",
      link: "/terminos",
    },
    {
      logo: "../../../public/Pregunta.svg",
      text: "Preguntas Frecuentes",
      link: "/preguntas",
    },
    {
      logo: "../../../public/Privacidad.svg",
      text: "Políticas de Privacidad",
      link: "/politicas",
    },
    { logo: "../../../public/Soporte.svg", text: "Soporte", link: "/soporte" },
  ];

  return (
    <footer className="bg-azulOscuro text-white py-6 px-6">
      <div className="container flex mx-auto px-4">
        <div className="flex w-6/12">
          <img
            src="../../../public/footer_person.png"
            alt="Footer Image"
            className="w-72 h-72"
          />
          <div className="-ms-16 ">
            <Logo />
          </div>
        </div>
        <div className="bg-white w-1 h-70 me-12"></div>
        <div className="flex flex-col space-y-4 w-6/12">
          {footerLinks.map((link, index) => (
            <FooterLink
              key={index}
              logo={link.logo}
              text={link.text}
              link={link.link}
            />
          ))}
          <div className="flex justify-end gap-4">
            <img
              src="../../../public/Instagram.svg"
              alt="instagram"
              className="w-10 h-10"
            />
            <img src="../../../public/FB.svg" alt="FB" className="w-10 h-10" />
          </div>

          <p className="text-black ms-auto">Copyright © Lasrecetasdelanona</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

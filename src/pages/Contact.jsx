import React from "react";
import Contactitem from "../components/Contactitem";
import CONTACT from "../assets/contact.png";
const Contact = () => {
  return (
    <div className="text-white">
      <div className="body2 flex justify-center items-center text-center">
        <img
          src={CONTACT}
          alt="festx"
          className="mx-auto w-[300px] md:w-[450px] py-10"
        />
      </div>
      <div className="body-rest pt-20 pb-10">
        <Contactitem
          heading="STUDENT CO-ORDINATORS"
          name2="AJAI K"
          mob2="89256 31079"
          name1="LOKESWARI S"
          mob1="73391 12232"
        />
        <h1 className="text-center mt-10 text-2xl lg:text-3xl">
          EVENT CO-ORDINATORS
        </h1>
        <div className="sm:grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 pt-20 gap-10 place-items-center">
          <Contactitem
            heading="HACKAHOLIC"
            name1="AVANTHIKA P V"
            mob1="93443 43670"
            name2="SUJAN B"
            mob2="89393 41756"
          />
          <Contactitem
            heading="BIZ BAZAAR"
            name1="AVULA NAGA SANJAY"
            mob1="89395 55757"
            name2="POOJA S"
            mob2="80723 41630"
          />
          <Contactitem
            heading="TECH TALE"
            name1="AFRIN M"
            mob1="70106 74056"
            name2="KAVIN PRABHAKAR RA"
            mob2="75980 96947"
          />
          <Contactitem
            heading="BLOODY BUGGERS"
            name1="KRISHNA KUMAR B"
            mob1="77080 77528"
            name2="HARITHAA S"
            mob2="99622 91235"
          />
          <Contactitem
            heading="LIGHTS ON"
            name1="JAI VIGNESH R"
            mob1="88256 45904"
            name2="BALAJI A"
            mob2="86678 58430"
          />
          <Contactitem
            heading="PROPOSE TO INVESTOR"
            name1="HARIBABU N"
            mob1="86680 70272"
            name2="SREE LAKSHMI G"
            mob2="70940 81674"
          />
        </div>
        <div className="pt-0 lg:pt-10 xl:pt-10 2xl:pt-10">
          <Contactitem
            heading="PARAGON QUEST"
            name1="SURETHA S"
            mob1="93602 51179"
            name2="DIVYESH S"
            mob2="89390 20427"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

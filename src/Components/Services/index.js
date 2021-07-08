import React from "react";
import Icon3 from "../../images/service-3.svg";
import Icon2 from "../../images/service-1.svg";
import Icon1 from "../../images/service-2.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServiceWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElement";

const Service = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServiceWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            WE help reduce your fess and increase your overall revenur.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>vertuel office</ServicesH2>
          <ServicesP>
            WE help reduce your fess and increase your overall revenur.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium benifits</ServicesH2>
          <ServicesP>
            WE help reduce your fess and increase your overall revenur.
          </ServicesP>
        </ServicesCard>
      </ServiceWrapper>
    </ServicesContainer>
  );
};

export default Service;

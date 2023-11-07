import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect, useState } from "react";

function CalendlyWidget() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    setTimeout(() => {
      setCalendlyLoaded(true);
    }, 1500);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Center display={calendlyLoaded ? "none" : "flex"}>
        <Spinner mt={"325px"} />
      </Center>
      <div
        display={calendlyLoaded ? "block" : "none"}
        className="calendly-inline-widget"
        data-url="https://calendly.com/draangelarodrigues?hide_gdpr_banner=1&text_color=2f2f2f&primary_color=b83707"
        style={{ minWidth: "320px", height: "650px" }}
      ></div>
    </div>
  );
}

export default CalendlyWidget;

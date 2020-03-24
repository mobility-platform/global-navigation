import React, { useEffect } from "react";
import { verticalNavigation } from "@mobility-platform/global-navigation";
import { getOAuthToken } from "somewhere";

function App() {
  useEffect(() => {
    verticalNavigation.render({
      selector: '[data-widget-host="vertical-navigation"]',
      defaultProps: {
        getToken: getOAuthToken,
        apiUrl: "https://myapiurl.com",
        profileApiUrl: "https://myprofileurl.com",
        backofficeUrl: "https://mybackoffice.com"
      }
    });
  }, [getOAuthToken]);

  return (
    <div style={{ marginLeft: "60px" }}>
      <div data-widget-host="vertical-navigation"></div>
      <section style={{ overflowX: "hidden", color: "#333" }}>
        {/* Your application content come here */}
      </section>
    </div>
  );
}

export default App;

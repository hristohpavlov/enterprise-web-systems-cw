import React from "react";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      {/* <Header /> */}
      <ShopSection />
      <CalltoActionSection />
      <ContactInfo />
      {/* <Footer /> */}
    </div>
  );
};

export default HomeScreen;

import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Liên hệ với chúng tôi</h1>
          <p className="text-justify mt-2">
            Có bất cứ vấn đề gì cứ liên hệ chúng tôi 24/7
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@LuxeGlobal.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 
          </p>

          <p>
           LuxeGlobal - Địa chỉ: Tòa nhà LV, 56 Đ. CMT8, Quận 1  
         </p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

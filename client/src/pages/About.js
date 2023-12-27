import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <h2>Về LuxeGlobal</h2>
            <p>
              Chào mừng bạn đến với LuxeGlobal! Chúng tôi là một shop thời trang
              cao cấp đẳng cấp quốc tế tại Việt Nam.
            </p>
            Ra đời năm 2022 với tầm nhìn trở thành thương hiệu thời trang xa xỉ
            hàng đầu. Chuyên cung cấp các mặt hàng thời trang cao cấp: túi xách,
            giày dép, phụ kiện của các thương hiệu nổi tiếng thế giới. Luôn cập
            nhật xu hướng thời trang mới nhất từ các fashion week danh giá. Tự
            hào phục vụ khách hàng tinh hoa khắp cả nước.
            <p>Các giá trị cốt lõi: Sang trọng - Tinh tế - Gần gũi</p>
          
            <p>Cam kết chỉ cung cấp hàng hiệu xách tay chính hãng 100%.</p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

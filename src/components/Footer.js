import React from "react";

const Footer = () => {
  return (
    <>
      <form
        className="newsletter"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for subscribing to our newsletter!");
        }}
      >
        <div className="xs:flex gap-24">
          <div className="text-center xs:text-left">
            <h4 className="mb-1 xs:mb-0">Newsletter</h4>
            <p>Get news about articles and updates in your inbox.</p>
          </div>
          <div className="flex flex-col gap-8 my-10 xs:my-0">
            <input placeholder="NAME" required />
            <input placeholder="EMAIL" type="email" required />
            <input placeholder="MESSAGE" required />
          </div>
        </div>
        <div className="flex">
          <div>
            <h1>GET</h1>
            <h1>IN TOUCH</h1>
          </div>
          <button type="submit">SEND</button>
        </div>
      </form>
      <footer>Copyright 2022 All Right Reserved By SG</footer>
    </>
  );
};

export default Footer;

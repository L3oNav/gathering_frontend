import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Page = forwardRef(({ children, title = "", ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequied,
  title: PropTypes.string,
};

export default Page;

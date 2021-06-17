import React from "react";
import {Slide, useScrollTrigger} from "@material-ui/core";

function HideOnScroll(props: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

export default HideOnScroll
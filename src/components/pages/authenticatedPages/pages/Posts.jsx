import React from "react";
import { ScrollReveal } from "reveal-on-scroll-react";
import Posting from "../Posting";

export default function () {
  return (
    <>
      <ScrollReveal.div className="posts-container">
        <Posting />
      </ScrollReveal.div>
    </>
  );
}

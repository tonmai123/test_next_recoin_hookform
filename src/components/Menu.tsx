"use client";

import React from "react";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";

export default function App() {
  return (
    <div>
      <div className="flex justify-center justify-items-center h-16">
        <b className="pt-2 text-4xl text-white">Logo</b>
      </div>
      <hr />
      <div>
        <Accordion>
          <AccordionItem key="1" aria-label="Menu 1" title="Menu 1">
            <Link className="text-white cursor-pointer">sub menu1</Link>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Menu 2" title="Menu 2">
            <div>
              <Link className="text-white cursor-pointer">sub menu2</Link>
            </div>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Menu 3" title="Menu 3">
            <div>
              <Link className="text-white cursor-pointer">sub menu3</Link>
            </div>
            <div>
              <Link className="text-white cursor-pointer">sub menu3</Link>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

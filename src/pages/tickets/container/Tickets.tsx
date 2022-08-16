import { useState } from "react";
import { PaginationTable, RightSidebar } from "components";
import { columns } from "./Tickets.constants";
const Tickets = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <RightSidebar open={open} setOpen={setOpen} form="tickets">
        <div>hello</div>
        <form action="" id="tickets"></form>
      </RightSidebar>
      <PaginationTable onOpenSidebar={setOpen} url="ticket" columns={columns} />
    </div>
  );
};

export default Tickets;

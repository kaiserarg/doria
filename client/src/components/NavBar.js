import React from "react";
import CodeButton from "./CodeButton";
import LinkButton from "./LinkButton";
import StartButton from "./StartButton";
import SelectButton from "./SelectButton";
import Setting from "./Setting";
import Exit from "./Exit";
import "../index.css";

const NavBar = () => {
    return (
            <div className="flex justify start w-NavWidth h-NavLength rounded-Nav mt-24 bg-secondary pt-64">
                <CodeButton/>
                <LinkButton/>
                <StartButton/>
                <SelectButton/>
                <Setting/>
                <Exit/>
            </div>
    )
}

export default NavBar;
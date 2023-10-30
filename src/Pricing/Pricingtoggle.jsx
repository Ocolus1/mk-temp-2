import React from "react";
import { Switch } from "@headlessui/react";

export default function Pricingtoggle({ enabled, setEnabled }) {
  return (
    <div className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-[#45B3BA]" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-zinc-800 transition`}
        />
      </Switch>
    </div>
  );
}

import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/night.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

import "./editor.css";

const Editor = ({ preferences, displayName, language, value, onChange }) => {
  const handleChange = (_, __, value) => {
    onChange(value);
  };
  const [open, setOpen] = useState(true);
  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className={`codemirror-wrapper fs-${preferences.fontSize}`}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: preferences.lineNumbers,
          theme: preferences.theme,
          scrollbarStyle: "null",
        }}
      />
    </div>
  );
};

export default Editor;

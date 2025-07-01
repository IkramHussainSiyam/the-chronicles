"use client";

import dynamic from "next/dynamic";
import { ReactQuillProps } from "react-quill";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ placeholder, hideToolbar = false, ...props }: Props) => {
  const modules = {
    toolbar: [
      [{ header: [false, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "script",
    "color",
    "background",
    "align",
    "link",
    "clean",
  ];

  return (
    <ReactQuill
      {...props}
      theme="snow"
      placeholder={placeholder}
      modules={hideToolbar ? { toolbar: false } : modules}
      formats={formats}
    />
  );
};

export default TextEditor;

interface Props extends ReactQuillProps {
  hideToolbar?: boolean;
}

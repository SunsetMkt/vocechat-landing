import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Head from "../components/Head";
type Props = {};

const Index = (props: Props) => {
  const router = useRouter()
  const link = decodeURIComponent(router.query.magic_link as string ?? "")
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <>
      <Head />
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-50">
        <ul className="flex flex-col justify-center items-center p-4">
          <li className="mb-2 text-2xl font-bold">Redirecting...</li>
          <div className="overflow-hidden w-full">
            <Image
              width={412}
              height={817}
              className="w-full h-auto -translate-y-24"
              src={"/img/redirecting.png"}
              alt="redirecting image"
            ></Image>
          </div>
          {link && <li className="text-gray-600 text-center w-full break-all flex flex-col gap-2 -mt-20">
            <i className="text-gray-400 not-italic text-xs">👇App not showing? You may copy the following invitation link and paste it into VoceChat App.</i>
            <textarea readOnly value={link} className="bg-gray-200 font-bold p-2 rounded-md" spellCheck={false}>
            </textarea>
            <CopyToClipboard text={link} onCopy={handleCopy} >
              <button
                className="btn-primary mb-16"
              >
                {copied ? "Copied" : `Copy The Link`}
              </button>
            </CopyToClipboard>
          </li>}
        </ul>

      </main>
    </>
  );
};

export default Index;

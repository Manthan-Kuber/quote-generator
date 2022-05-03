import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { DataProps } from "../../types";
import { CheckIcon, CopyToClipboardIcon, QuoteContainer } from "./Quote.styles";

const Quote = ({ data, index }: DataProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);
  const quoteAnimation = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index! * 0.2 },
    },
  };

  async function copyTextToClipboard(text: string) {
    console.log(text);
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const copyOnClick = () => {
    copyTextToClipboard(`${quoteRef.current?.innerText}`).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    });
  };

  return (
    <QuoteContainer
      as={motion.div}
      variants={quoteAnimation}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.1 }}
    >
      <p ref={quoteRef}>“{data?.content}”</p>
      {document.queryCommandSupported("copy") && isCopied ? (
        <CheckIcon />
      ) : (
        <CopyToClipboardIcon onClick={copyOnClick} />
      )}
    </QuoteContainer>
  );
};

export default Quote;

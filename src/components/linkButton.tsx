import { Link, LinkProps } from "expo-router";
import React from "react";

interface LinkButtonProps extends LinkProps<string> {
  title: string;
}

export const LinkButton = ({ title, ...rest }: LinkButtonProps) => {
  return (
    <Link className="text-slate-300 font-body text-base text-center" {...rest}>
      {title}
    </Link>
  );
};

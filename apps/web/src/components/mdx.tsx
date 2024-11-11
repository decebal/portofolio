import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import type React from "react";
import type { ReactNode } from "react";

import { HeadingLink } from "@/components/index";
import { SmartImage, SmartLink, Text } from "@/once-ui/components";

import type { SmartImageProps } from "@/once-ui/components/SmartImage";
import type { TextProps } from "@/once-ui/interfaces";

type TableProps = {
  data: {
    headers: string[];
    rows: string[][];
  };
};

function Table({ data }: TableProps) {
  const headers = data.headers.map((header, index) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({
  alt,
  src,
  ...props
}: SmartImageProps & { src: string }) {
  if (!src) {
    console.error("SmartImage requires a valid 'src' property.");
    return null;
  }

  return (
    <SmartImage
      className="my-20"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const CustomHeading = ({ children, ...props }: TextProps) => {
    const slug = slugify(children as string);
    return (
      <HeadingLink
        style={{
          marginTop: "var(--static-space-24)",
          marginBottom: "var(--static-space-12)",
        }}
        level={level}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `Heading${level}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "150%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

const components = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  p: createParagraph as any,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  h1: createHeading(1) as any,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  h2: createHeading(2) as any,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  h3: createHeading(3) as any,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  h4: createHeading(4) as any,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  h5: createHeading(5) as any,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  h6: createHeading(6) as any,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  img: createImage as any,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  a: CustomLink as any,
  Table,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

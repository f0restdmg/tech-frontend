import { IconProps } from "./types";

export const Icon = ({
  name,
  className,
  section = "logo",
  ...props
}: IconProps) => {
  return (
    <svg className={className} aria-hidden="true" focusable="false" {...props}>
      <use xlinkHref={`/sprites/${section}.svg#${name}`} />
    </svg>
  );
};

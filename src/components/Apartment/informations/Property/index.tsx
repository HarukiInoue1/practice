import { FC } from "react";

type Props = {
  status: string;
  story: number;
};

export const PropertyType: FC<Props> = ({ status, story }) => {
  return (
    <>
      <p>
        {status}
        <br />
        {story}階建
      </p>
    </>
  );
};


export const PropertyAccess: FC<{accesses:string[]}> = ({ accesses }) => {
  return (
    <>
      {accesses.map((access, index) => (
        <p key={index}>{access}</p>
      ))}
    </>
  );
};

export const PropertyAddress: FC<{address:string}> = ({address}) => {
  return (
    <>
      <p>{address}</p>
    </>
  );
};

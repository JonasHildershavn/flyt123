import { useSession, signIn } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { FC } from "react";

export type ProtectedComponentProps = {
  children?: ReactNode;
};

export const ProtectedComponent: FC<ProtectedComponentProps> = ({
  children,
}) => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (!session?.user && status !== "loading") signIn();
  }, [session]);

  return <>{session && children}</>;
};

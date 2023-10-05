export type User = {
    email: string;
    email_verified: boolean;
    name: string;
    nickname: string;
    picture: string;
    sub: string;
    updated_at: string;
  };

export type NavbarProps = {
  user: User | null | undefined;
};

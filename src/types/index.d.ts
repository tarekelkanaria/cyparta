declare module "forms" {
  type ILoginFormValues = {
    email: string;
    password: string;
  };
  type IProfileData = {
    id: number;
    name: string;
    email: string;
    phone: string;
    image: string;
    last_login: string | null;
    first_name: string;
    last_name: string;
    date_joined: Date;
    created: Date;
    updated: Date;
    uip: string | null;
    bio: string | null;
    cover: string;
    contract_email: string | null;
    contract_number: string | null;
    groups: unknown[];
    user_permissions: unknown[];
  };
}

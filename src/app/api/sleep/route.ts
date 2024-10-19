import {
  ActionPostResponse,
  createActionHeaders,
  createPostResponse,
  ActionGetResponse,
  ActionPostRequest,
} from "@solana/actions";

import { program } from "@/app/anchor/setup";

const headers = createActionHeaders({
  chainId: "devnet",
  actionVersion: "2.2.1",
});

export const GET = async (req: Request) => {
  const payload: ActionGetResponse = {
    title: "Sleep",
    icon: "https://ucarecdn.com/6125283b-b089-42be-a2d3-3ab153c99134/-/preview/1000x1000/",
    description: "Sleep to earn token",
    label: "SLEEP",
    links: {
      actions: [
        {
          label: "Sleep",
          href: "/api/sleep",
          type: "transaction",
        },
        {
          label: "Claim",
          href: "/api/sleep/claim",
          type: "transaction",
        },
      ],
    },
  };

  return Response.json(payload, {
    headers,
  });
};

export const OPTIONS = GET;

export const POST = async (req: Request) => {
  let account;

  try {
    const body: ActionPostRequest = await req.json();
    account = body;

    //      logic with program here

    console.log(program);

    return Response.json(
      { msg: "" },
      {
        headers,
      }
    );
  } catch (error: any) {
    console.log(error);
  }
};

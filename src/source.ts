import fetch from "node-fetch";

export type PixelData = {
  author: string;
  entityId: string;
  hexColor: string;
  indexInFlag: number;
};
export type FlagData = PixelData[][];

export async function fetchFlag(): Promise<FlagData | null> {
  const result = await fetch("https://api-flag.fouloscopie.com/flag", {
    headers: {
      accept: "*/*",
      "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/json",
      "if-none-match": 'W/"4db4ac-MMvyAgIANW66SDjY56rHiHkS3NM"',
      "sec-ch-ua":
        '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      Referer: "https://flag.fouloscopie.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  });

  if (result.status == 200) {
    return (await result.json()) as PixelData[][];
  } else {
    return null;
  }
}

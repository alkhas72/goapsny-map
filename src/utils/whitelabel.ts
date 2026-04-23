export async function getWhitelabelConfig(hostname: string) {
  const {
    NEXT_PUBLIC_ACCESSIBILITY_CLOUD_BASE_URL: baseUrl,
    NEXT_PUBLIC_ACCESSIBILITY_CLOUD_APP_TOKEN: appToken,
  } = process.env;

  const url = `${baseUrl}/apps/${sanitizeHostname(hostname)}.json?appToken=${appToken}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      return await response.json();
    }

    console.warn(
      `Failed to fetch whitelabel config from ${url}: ${response.status} ${response.statusText}. Using fallback config for Abkhazia.`
    );
  } catch (error) {
    console.error(`Error fetching whitelabel config, using Abkhazia fallback:`, error);
  }

  // Fallback config for Abkhazia localization
  return {
    _id: "goapsny-fallback-id",
    organizationId: "abkhazia-org",
    name: "GoApsny",
    tokenString: "93ab8e1e79c91e7bb99fecd99b7b3003",
    clientSideConfiguration: {
      branding: {
        colors: {
          primary: "#008EE0", // GoApsny Professional Blue
        },
        vectorLogoSVG: {
          data: "<svg viewBox=\"0 0 320 80\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"0\" y=\"60\" font-family=\"Inter, system-ui, sans-serif\" font-weight=\"800\" font-size=\"58\" fill=\"#1A1F2C\">G</text><path d=\"M68 15c-11.6 0-21 9.4-21 21s21 34 21 34 21-22.4 21-34-9.4-21-21-21zm0 30c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z\" fill=\"#008EE0\"/><text x=\"95\" y=\"60\" font-family=\"Inter, system-ui, sans-serif\" font-weight=\"800\" font-size=\"58\" fill=\"#1A1F2C\">Apsny</text></svg>"
        },
        vectorIconSVG: {
          data: "<svg viewBox=\"0 0 60 80\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30 15c-11.6 0-21 9.4-21 21s21 34 21 34 21-22.4 21-34-9.4-21-21-21zm0 30c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z\" fill=\"#008EE0\"/></svg>"
        }
      },
      textContent: {
        product: {
          name: { ru: "GoApsny", en: "GoApsny" },
          claim: { ru: "Карта доступности", en: "Accessibility Map" },
          description: { ru: "Карта доступных мест", en: "Accessible places map" },
        },
      },
      meta: {
        twitter: {},
        facebook: {},
      },
    },
  };
}

export function sanitizeHostname(hostnameOrIPAddress: string) {
  let hostname = hostnameOrIPAddress
    // Allow sharing a deployment with ngrok
    .replace(/.*\.ngrok(?:-free)\.app$/, "wheelmap.tech")
    // Allow branch test deployments with a common branding
    .replace(/.*\.wheelmap\.tech$/, "wheelmap.tech")
    // Use 'localhost' branding for loopback IPs
    .replace(/127\.0\.0\.1/, "localhost")
    .replace(/0\.0\.0\.0/, "localhost")
    .replace(/::1/, "localhost");

  // Only replace local/private network IPs in development mode
  if (process.env.NODE_ENV === "development") {
    hostname = hostname
      // Use 'localhost' branding for private network IPs (192.168.x.x, 10.x.x.x, 172.16-31.x.x)
      .replace(/^192\.168\.\d{1,3}\.\d{1,3}$/, "localhost")
      .replace(/^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, "localhost")
      .replace(/^172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}$/, "localhost");
  }

  return hostname;
}
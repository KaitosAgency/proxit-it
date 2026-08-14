type OdooConfig = {
  url: string;
  db: string;
  login: string;
  apiKey: string;
};

type JsonRpcResponse<T> = {
  result?: T;
  error?: { message?: string; data?: { message?: string } };
};

function getOdooConfig(): OdooConfig | null {
  const url = process.env.ODOO_URL?.replace(/\/$/, "");
  const db = process.env.ODOO_DB;
  const login = process.env.ODOO_LOGIN;
  const apiKey = process.env.ODOO_API_KEY;

  if (!url || !db || !login || !apiKey) {
    return null;
  }

  return { url, db, login, apiKey };
}

export function isOdooConfigured(): boolean {
  return getOdooConfig() !== null;
}

async function jsonRpcCall<T>(
  config: OdooConfig,
  service: string,
  method: string,
  args: unknown[],
): Promise<T> {
  const response = await fetch(`${config.url}/jsonrpc`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      params: { service, method, args },
      id: Date.now(),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Odoo HTTP ${response.status}`);
  }

  const data = (await response.json()) as JsonRpcResponse<T>;
  if (data.error) {
    throw new Error(data.error.data?.message ?? data.error.message ?? "Erreur Odoo");
  }

  return data.result as T;
}

let cachedUid: number | null = null;

async function getUid(config: OdooConfig): Promise<number> {
  if (cachedUid) {
    return cachedUid;
  }

  const uid = await jsonRpcCall<number | false>(config, "common", "authenticate", [
    config.db,
    config.login,
    config.apiKey,
    {},
  ]);

  if (!uid) {
    throw new Error("Authentification Odoo refusée");
  }

  cachedUid = uid;
  return uid;
}

export async function odooExecuteKw<T>(
  model: string,
  method: string,
  args: unknown[] = [],
  kwargs: Record<string, unknown> = {},
): Promise<T> {
  const config = getOdooConfig();
  if (!config) {
    throw new Error("Odoo non configuré");
  }

  const uid = await getUid(config);

  return jsonRpcCall<T>(config, "object", "execute_kw", [
    config.db,
    uid,
    config.apiKey,
    model,
    method,
    args,
    kwargs,
  ]);
}

export async function getOdooConfigParameter(key: string): Promise<string | null> {
  const rows = await odooExecuteKw<Array<{ value: string }>>(
    "ir.config_parameter",
    "search_read",
    [[["key", "=", key]], ["value"]],
    { limit: 1 },
  );

  return rows[0]?.value ?? null;
}

export function parseOptionalInt(value: string | null | undefined): number | undefined {
  if (!value?.trim()) {
    return undefined;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : undefined;
}

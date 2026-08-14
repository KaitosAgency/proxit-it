import {
  getOdooConfigParameter,
  odooExecuteKw,
  parseOptionalInt,
} from "@/lib/odoo/client";

/** Clés modifiables dans Odoo sans redéployer le site (Paramètres système). */
export const ODOO_CRM_ROUTING_KEYS = {
  teamId: "proxi_website.crm_team_id",
  userId: "proxi_website.crm_user_id",
} as const;

export type ContactLeadPayload = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  topic: string;
  attribution?: string;
  workstations?: string;
  servers?: string;
  message: string;
};

type CrmRouting = {
  teamId?: number;
  userId?: number;
};

async function getCrmRouting(): Promise<CrmRouting> {
  const [teamFromOdoo, userFromOdoo] = await Promise.all([
    getOdooConfigParameter(ODOO_CRM_ROUTING_KEYS.teamId),
    getOdooConfigParameter(ODOO_CRM_ROUTING_KEYS.userId),
  ]);

  return {
    teamId:
      parseOptionalInt(teamFromOdoo) ??
      parseOptionalInt(process.env.ODOO_CRM_TEAM_ID),
    userId:
      parseOptionalInt(userFromOdoo) ??
      parseOptionalInt(process.env.ODOO_CRM_USER_ID),
  };
}

function buildLeadDescription(payload: ContactLeadPayload): string {
  const parcDetails = [
    payload.workstations?.trim() ? `Nombre de postes : ${payload.workstations.trim()}` : null,
    payload.servers?.trim() ? `Nombre de serveurs : ${payload.servers.trim()}` : null,
  ].filter(Boolean);

  const lines = [
    `Votre demande concerne : ${payload.topic}`,
    payload.attribution ? `Comment nous avez-vous connu : ${payload.attribution}` : null,
    parcDetails.length > 0 ? parcDetails.join("\n") : null,
    "",
    payload.message,
  ];

  return lines.filter((line) => line !== null).join("\n");
}

/**
 * Crée une opportunité CRM — équivalent « Créer une opportunité » du formulaire Odoo Website.
 * Équipe / vendeur : lus depuis Odoo (ir.config_parameter) pour rester éditables côté ERP.
 */
export async function createContactOpportunity(payload: ContactLeadPayload): Promise<number> {
  const routing = await getCrmRouting();
  const subject =
    process.env.ODOO_LEAD_SUBJECT?.trim() || "Nouveau contact site web";

  const values: Record<string, unknown> = {
    name: subject,
    type: "opportunity",
    contact_name: payload.name,
    partner_name: payload.company,
    email_from: payload.email,
    description: buildLeadDescription(payload),
  };

  if (payload.phone?.trim()) {
    values.phone = payload.phone.trim();
  }

  if (routing.teamId) {
    values.team_id = routing.teamId;
  }

  if (routing.userId) {
    values.user_id = routing.userId;
  }

  return odooExecuteKw<number>("crm.lead", "create", [values]);
}

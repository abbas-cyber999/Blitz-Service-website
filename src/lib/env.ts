export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export function hasDatabaseUrl() {
  return Boolean(process.env.DATABASE_URL);
}

export function hasAuthSecret() {
  return Boolean(process.env.AUTH_SECRET);
}

export function getSeedAdminEmail() {
  return process.env.SEED_ADMIN_EMAIL ?? "admin@deutschhero.local";
}

export function getSeedAdminPassword() {
  return process.env.SEED_ADMIN_PASSWORD ?? "change-me-now";
}

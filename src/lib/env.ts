export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export function hasDatabaseUrl() {
  return Boolean(process.env.DATABASE_URL);
}

export function hasEmailConfig() {
  return Boolean(process.env.EMAIL_SERVER && process.env.EMAIL_FROM);
}

export function hasAdminPassword() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function hasAdminSessionSecret() {
  return Boolean(process.env.ADMIN_SESSION_SECRET);
}

export function hasAdminAuthConfig() {
  return hasAdminPassword() && hasAdminSessionSecret();
}

/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** SMTP sunucusu (ör. smtp.gmail.com veya sağlayıcınızın host’u) */
  readonly SMTP_HOST?: string;
  readonly SMTP_PORT?: string;
  /** 465 için genelde true; 587 için false */
  readonly SMTP_SECURE?: string;
  readonly SMTP_USER?: string;
  readonly SMTP_PASS?: string;
  /** Gönderen: "Coffee Los Andes <noreply@alanadiniz.com>" — boşsa SMTP_USER kullanılır */
  readonly SMTP_FROM?: string;
  /** Alıcı (boşsa site.contactEmail) */
  readonly MAIL_TO?: string;
}

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { site } from '../../config/site';
import { defaultLocale } from '../../i18n/config';
import { locales } from '../../i18n/types';

export const prerender = false;

function contactRedirectPath(base: string, kind: 'sent' | 'error'): string {
  const pathOnly = (base.split('?')[0] || '').trim();
  const localeGroup = locales.join('|');
  const valid = new RegExp(`^\\/(${localeGroup})\\/contact\\/?$`).test(pathOnly);
  const prefix = valid ? pathOnly.replace(/\/$/, '') : `/${defaultLocale}/contact`;
  return `${prefix}?${kind === 'sent' ? 'sent=1' : 'error=1'}`;
}

function getSmtpConfig() {
  const host = import.meta.env.SMTP_HOST;
  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  const port = Number(import.meta.env.SMTP_PORT ?? 587);
  const secure = import.meta.env.SMTP_SECURE === 'true' || port === 465;
  return { host, port, secure, auth: { user, pass } };
}

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const honeypot = formData.get('_gotcha');
  if (honeypot != null && String(honeypot).trim() !== '') {
    return new Response(null, { status: 204 });
  }

  const name = String(formData.get('name') ?? '').trim();
  const contact = String(formData.get('contact') ?? '').trim();
  const company = String(formData.get('company') ?? '').trim();
  const requestType = String(formData.get('requestType') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();
  const redirectRaw = String(formData.get('_redirect') ?? `/${defaultLocale}/contact`);

  if (!name || !contact) {
    const next = contactRedirectPath(redirectRaw, 'error');
    return Response.redirect(new URL(next, site.canonicalOrigin), 303);
  }

  const smtp = getSmtpConfig();
  if (!smtp) {
    console.error('[contact] SMTP_HOST / SMTP_USER / SMTP_PASS eksik');
    const next = contactRedirectPath(redirectRaw, 'error');
    return Response.redirect(new URL(next, site.canonicalOrigin), 303);
  }

  const mailTo = import.meta.env.MAIL_TO?.trim() || site.contactEmail;
  const from = import.meta.env.SMTP_FROM?.trim() || `Coffee Los Andes <${smtp.auth.user}>`;

  const text = [
    `İsim / Name: ${name}`,
    `İletişim / Contact: ${contact}`,
    `Şirket / Company: ${company || '(belirtilmedi / not specified)'}`,
    `Talep Türü / Request Type: ${requestType || '(belirtilmedi / not specified)'}`,
    '',
    message || '(Mesaj yok / no message)',
    '',
    `—`,
    `Gönderim / Submitted: ${new Date().toISOString()}`,
  ].join('\n');

  const replyTo = contact.includes('@') ? contact : undefined;

  try {
    const transporter = nodemailer.createTransport(smtp);
    await transporter.sendMail({
      from,
      to: mailTo,
      replyTo,
      subject: `[Coffee Los Andes B2B] ${name}`,
      text,
    });
  } catch (e) {
    console.error('[contact] sendMail', e);
    const next = contactRedirectPath(redirectRaw, 'error');
    return Response.redirect(new URL(next, site.canonicalOrigin), 303);
  }

  const next = contactRedirectPath(redirectRaw, 'sent');
  return Response.redirect(new URL(next, site.canonicalOrigin), 303);
};

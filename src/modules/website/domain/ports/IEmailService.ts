// ─── Email Service Port ───────────────────────────────────────────────────────
// This interface is the contract between the application layer and any email
// provider. To switch providers (SendGrid, Resend, AWS SES, etc.) simply
// create a new class that implements this interface and swap it in route.ts.

export interface EmailPayload {
  /** One or more recipient addresses */
  to: string[];
  subject: string;
  /** HTML body */
  html: string;
  /** Optional reply-to address (e.g. the user who submitted the form) */
  replyTo?: string;
}

export interface IEmailService {
  send(payload: EmailPayload): Promise<void>;
}

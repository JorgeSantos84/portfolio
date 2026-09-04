interface ContactEmailInfoProps {
  email: string;
  subject: string;
  body: string;
}

export function openEmailClient({
  email,
  subject,
  body,
}: ContactEmailInfoProps) {
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function openNewTab(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openPhoneCall(phoneNumber: string) {
  window.location.href = `tel:${phoneNumber}`;
}

/**
 * Smooth-scroll to an in-page section AND move keyboard focus to it, so keyboard
 * and screen-reader users don't lose their place (WCAG 2.4.3 Focus Order).
 * Sections get `scroll-margin-top` in globals.css so the fixed navbar doesn't
 * cover them, and `[tabindex="-1"]:focus` has its outline suppressed so the
 * programmatic focus doesn't draw a ring around the whole section.
 */
export function scrollToSection(href: string): void {
  const el = document.querySelector<HTMLElement>(href);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}

import { redirect } from "next/navigation";

/**
 * Home route — the presentation page is hidden for this project, so the root
 * redirects straight to the devis contractuel. The password gate (site-gate
 * feature) still wraps the whole app from the root layout.
 */
export default function Page() {
  redirect("/devis");
}

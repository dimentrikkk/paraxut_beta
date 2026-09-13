import { useState, type FormEvent } from "react";
import { Info, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/config/restaurant";
import { Reveal, SectionHeading } from "./Reveal";

const fieldClass =
  "mt-1.5 w-full min-h-11 rounded-sm border border-input bg-background px-3 py-2 text-base text-foreground transition-colors placeholder:text-muted-foreground focus:border-gold";

export function ReservationForm() {
  const { t } = useI18n();
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", people: "2", date: "", time: "20:00", message: "" });

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.date || !form.time) {
      setError(true);
      return;
    }
    setError(false);

    const lines = [
      t("reservation.waIntro"),
      "",
      `${t("reservation.waName")}: ${form.name.trim()}`,
      `${t("reservation.waPeople")}: ${form.people}`,
      `${t("reservation.waDate")}: ${form.date.split("-").reverse().join("/")}`,
      `${t("reservation.waTime")}: ${form.time}`,
    ];
    if (form.message.trim()) lines.push(`${t("reservation.waMessage")}: ${form.message.trim()}`);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="reservas" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          center
          eyebrow={t("reservation.eyebrow")}
          title={t("reservation.title")}
          subtitle={t("reservation.subtitle")}
        />

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 rounded-sm border border-border bg-card p-5 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="res-name" className="text-sm font-medium text-card-foreground">
                  {t("reservation.name")}
                </label>
                <input
                  id="res-name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name")(e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="res-people" className="text-sm font-medium text-card-foreground">
                  {t("reservation.people")}
                </label>
                <input
                  id="res-people"
                  name="people"
                  type="number"
                  min={1}
                  max={40}
                  inputMode="numeric"
                  value={form.people}
                  onChange={(e) => update("people")(e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="res-date" className="text-sm font-medium text-card-foreground">
                  {t("reservation.date")}
                </label>
                <input
                  id="res-date"
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => update("date")(e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="res-time" className="text-sm font-medium text-card-foreground">
                  {t("reservation.time")}
                </label>
                <input
                  id="res-time"
                  name="time"
                  type="time"
                  required
                  value={form.time}
                  onChange={(e) => update("time")(e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="res-message" className="text-sm font-medium text-card-foreground">
                  {t("reservation.message")}
                </label>
                <textarea
                  id="res-message"
                  name="message"
                  rows={3}
                  placeholder={t("reservation.messagePlaceholder")}
                  value={form.message}
                  onChange={(e) => update("message")(e.target.value)}
                  className={`${fieldClass} resize-y`}
                />
              </div>
            </div>

            {error ? (
              <p role="alert" className="mt-4 text-sm font-medium text-destructive">
                {t("reservation.required")}
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t("reservation.submit")}
            </button>

            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-px h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {t("reservation.disclaimer")}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

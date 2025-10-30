"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/components/providers/AuthProvider";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha no login.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.overlay} />
      <div className={styles.contour} />
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <div className={styles.logo}>SUN ROSE</div>
          <div className={styles.tagline}>BEACH &amp; RESORT WEAR</div>
        </div>
        <p className={styles.subtitle}>Faça seu login para acessar.</p>
        {error ? <div className={styles.error}>{error}</div> : null}
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span className={styles.label}>E-mail</span>
            <input
              className={styles.input}
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Senha</span>
            <input
              className={styles.input}
              type="password"
              value={password}
              placeholder="Senha"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <button className={styles.button} type="submit" disabled={submitting}>
            {submitting ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

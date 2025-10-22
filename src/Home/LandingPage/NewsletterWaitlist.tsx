import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../Styles/Styles";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Section = styled.section`
  width: 100%;
  background-color: ${COLORS.main};
  color: ${COLORS.white};
  text-align: center;
  padding: 5rem 1.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: ${COLORS.yellow};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Input = styled.input`
  padding: 0.9rem 1.2rem;
  border-radius: 9999px;
  border: none;
  width: 100%;
  max-width: 350px;
  outline: none;
  font-size: 1rem;
`;

const Button = styled.button<{ disabled?: boolean }>`
  background-color: ${COLORS.green};
  color: ${COLORS.white};
  font-weight: 600;
  border: none;
  border-radius: 9999px;
  padding: 0.9rem 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.second};
  }

  &:disabled {
    background-color: ${COLORS.grey};
    cursor: not-allowed;
  }
`;

const Message = styled.p<{ $success?: boolean }>`
  margin-top: 1rem;
  font-size: 0.95rem;
  color: ${(props) => (props.$success ? COLORS.green : COLORS.red)};
`;

const NewsletterWaitlist = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<String>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!validateEmail(trimmedEmail)) {
      setMessage("Merci d’entrer une adresse e-mail valide.");
      setSuccess(false);
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Vérifier si l'email existe déjà
      const { data: existing } = await supabase
        .from("waitlist")
        .select("id")
        .eq("email", trimmedEmail)
        .limit(1);

      if (existing && existing.length > 0) {
        setMessage("Cette adresse est déjà inscrite 👍");
        setSuccess(true);
        setLoading(false);
        return;
      }

      // Ajouter l'email
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email: trimmedEmail }]);
      if (error) throw error;

      setMessage("Merci ! Vous serez informé dès le lancement 🎉");
      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage("Une erreur est survenue, réessayez plus tard.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <Title>Reste informé du lancement 🚀</Title>
      <Subtitle>
        Laisse ton e-mail pour être averti dès que la plateforme sera en ligne !
      </Subtitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Votre e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Je m’inscris"}
        </Button>
      </Form>
      {message && <Message $success={success}>{message}</Message>}
    </Section>
  );
};

export default NewsletterWaitlist;
